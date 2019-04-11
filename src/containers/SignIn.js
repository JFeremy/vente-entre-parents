import React from 'react'
import { StyledFirebaseAuth } from 'react-firebaseui'

import Typography from '@material-ui/core/Typography'

import { getUiConfig } from '../firebase'
import { withFirebase } from '../context/FirebaseContext'

const SignIn = ({ firebase }) => (
  <>
    <Typography align="center">
      Connecter afin de pouvoir déposer des annonces, mais également pour en
      ajouter à vos favoris !
    </Typography>
    <StyledFirebaseAuth
      uiConfig={getUiConfig(firebase)}
      firebaseAuth={firebase.auth()}
    />
  </>
)

export default withFirebase(SignIn)
