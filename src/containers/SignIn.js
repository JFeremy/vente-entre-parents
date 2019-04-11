import React from 'react'
import { StyledFirebaseAuth } from 'react-firebaseui'

import { getUiConfig } from '../firebase'
import { withFirebase } from '../components/FirebaseContext'
import Header from '../components/header'
import AppDrawer from '../components/AppDrawer'
import ArticlePreview from '../components/Article/ArticlePreview'
import ArticleDetail from '../components/Article/ArticleDetail'
import ArticleForm from '../components/Article/ArticleForm'
import Filter from '../components/Filter'

const SignIn = ({ firebase }) => (
  <div>
    <Header siteTitle="Gatsby Firebase Starter" />
    <AppDrawer />
    <Filter />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      {
        <ArticleDetail
          article={{
            title: 'Lot de vêtement pour fille',
            description:
              "Lot de plusieurs vêtement pour fille de 3 mois à 1 ans. Dans l'ensemble, ils sont dans un bon état.",
            sex: 'fille',
            category: 'vêtements',
            age: '3 mois - 12 mois',
            price: 50,
            seller: '06.06.06.06.06 / nom_prenom@domaine.com',
            photos: [
              {
                link:
                  'https://i2.cdscdn.com/pdt2/0/6/6/1/700x700/mp09604066/rw/mode-fille-2-pcs-ensemble-de-vetement-top-licorne.jpg',
              },
              {
                link:
                  'https://static.kiabi.com/images/t-shirt-hello-kitty-rose-fille-ws926_3_fr1.jpg',
              },
              {
                link:
                  'https://www.tati.fr/phototheque/boutique/179000/medium/00W17893600145.jpg',
              },
              {
                link:
                  'https://ae01.alicdn.com/kf/HTB1wMpAQFXXXXc8XpXXq6xXFXXX8/2016-Printemps-Automne-B-b-Fille-V-tements-Belle-Hello-Kitty-de-Bande-Dessin-e-Motif.jpg_640x640.jpg',
              },
            ],
          }}
        />
      }
      <ArticlePreview
        title="Lot de vêtement pour fille"
        sex="fille"
        category="Vêtement(s)"
        age={['3 mois', '12 mois']}
        price={50}
        nbView={5}
        isFavorite={true}
      />
      <ArticleForm />
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
