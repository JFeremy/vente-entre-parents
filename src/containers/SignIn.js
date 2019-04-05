import React from 'react'
import { StyledFirebaseAuth } from 'react-firebaseui'

import { getUiConfig } from '../firebase'
import { withFirebase } from '../components/FirebaseContext'
import Header from '../components/header'
import ArticlePreview from '../components/Article/ArticlePreview'
import InputWithIcon from '../components/Article/ArticleForm'

const SignIn = ({ firebase }) => (
  <div>
    <Header siteTitle="Gatsby Firebase Starter" />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <ArticlePreview
        title="Lot de vêtement pour fille"
        sex="fille"
        size={['3 mois', '12 mois']}
        price={50}
      />
      <InputWithIcon />
      <h4>Hey, please login to continue</h4>
      <h5>This is just firebase login test</h5>
    </div>
    <StyledFirebaseAuth
      uiConfig={getUiConfig(firebase)}
      firebaseAuth={firebase.auth()}
    />
  </div>
)

export default withFirebase(SignIn)
