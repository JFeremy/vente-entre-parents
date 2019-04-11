import React, { useState } from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SignOut from '../containers/SignOut'
import ArticlePreview from '../components/Article/ArticlePreview'
import ArticleDetail from '../components/Article/ArticleDetail'
import ArticleForm from '../components/Article/ArticleForm'
import SignIn from '../containers/SignIn'

const IndexPage = props => {
  return (
    <Layout>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby Firebase Starter.</p>
      <p>Now go build something great with gatsby + firebase.</p>
      <p>
        See example data fetcehed from firebase: in{' '}
        <code>FetchingExample.js</code>
      </p>
      <SignIn />
      <ArticleDetail
        article={{
          title: 'Lot de vêtement pour fille',
          description:
            "Lot de plusieurs vêtement pour fille de 3 mois à 1 ans. Dans l'ensemble, ils sont dans un bon état.",
          sex: 'fille',
          category: 'vêtements',
          age: '3 mois - 12 mois',
          price: 50,
          nbView: 5,
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

      <ArticlePreview
        title="Lot de vêtement pour fille"
        sex="fille"
        category="Vêtement(s)"
        age={['3 mois', '12 mois']}
        price={50}
        isFavorite={true}
      />
      <ArticleForm />
      <Link to="/page-2/">Go to page 2 </Link>
      <SignOut />
    </Layout>
  )
}

export default IndexPage
