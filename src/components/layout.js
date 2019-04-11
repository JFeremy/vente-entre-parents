import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import getFirebase from '../firebase'
import FirebaseContext from '../context/FirebaseContext'

import Header from './header'
import Filter from './Filter'
import AppDrawer from './AppDrawer'
import './layout.css'

class Layout extends Component {
  state = {
    firebase: null,
    authenticated: false,
  }

  ChangeLanguage = () => {
    let _strSignInLinks = document.getElementsByClassName(
      'firebaseui-idp-text-long'
    )
    for (let link of _strSignInLinks) {
      link.textContent = link.textContent.replace(
        'Sign in with',
        'Connexion avec'
      )
    }
  }

  componentDidMount() {
    const app = import('firebase/app')
    const auth = import('firebase/auth')
    const database = import('firebase/database')

    Promise.all([app, auth, database]).then(values => {
      const firebase = getFirebase(values[0])
      this.setState({ firebase })

      firebase.auth().onAuthStateChanged(user => {
        if (!user) {
          this.setState({ authenticated: false })
        } else {
          this.setState({ authenticated: true })
        }
      })
    })

    // eslint-disable-next-line no-lone-blocks
    {
      setTimeout(() => {
        this.ChangeLanguage()
      }, 1000)
    }
  }

  render = () => {
    const { firebase, authenticated } = this.state

    if (!firebase) return null

    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' },
              ]}
            >
              <html lang="en" />
            </Helmet>
            <Header siteTitle={data.site.siteMetadata.title} />
            <FirebaseContext.Provider value={firebase}>
              <AppDrawer
                onClickElement={undefined}
                isOpen={true}
                isLogged={authenticated ? true : false}
              />
              <div
                style={{
                  margin: '0 auto',
                  maxWidth: 960,
                  padding: '0px 1.0875rem 1.45rem',
                  paddingTop: 0,
                }}
              >
                {this.props.children}
              </div>
            </FirebaseContext.Provider>
            <Filter />
          </>
        )}
      />
    )
  }
}
export default Layout
