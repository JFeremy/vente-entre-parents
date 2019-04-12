import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { withFirebase } from '../store/FirebaseContext'

import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import StoreIcon from '@material-ui/icons/Store'
import StarIcon from '@material-ui/icons/Star'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import ContactSupportIcon from '@material-ui/icons/ContactSupport'

const styles = theme => ({
  drawer: {
    flexShrink: 0,
    display: 'flex',
    backgroundColor: theme.palette.background.paper,
  },
  drawerPaper: {
    paddingTop: theme.spacing.unit * 10,
  },
  toolbar: {
    flexGrow: 1,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  },
})

const AppDrawer = props => {
  const {
    classes,
    isOpen,
    isLogged,
    onClickElement,
    onClickClose,
    firebase,
  } = props

  const signOut = () => {
    firebase.auth().signOut()
  }

  function renderAccount() {
    return isLogged ? (
      <>
        <ListItem button>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Mon compte" />
        </ListItem>
        <ListItem button onClick={signOut()}>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Se déconnecter" />
        </ListItem>
      </>
    ) : (
      <ListItem button>
        <ListItemIcon>
          <AccountCircleIcon />
        </ListItemIcon>
        <ListItemText primary="Se connecter" />
      </ListItem>
    )
  }

  return (
    <>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        open={isOpen}
        onClose={() => onClickClose}
      >
        <Grid
          className={classes.toolbar}
          container
          direction="column"
          justify="space-between"
          alignItems="stretch"
        >
          <List>
            <ListItem button onClick={() => onClickElement('articles')}>
              <ListItemIcon>
                <ShoppingCartIcon />
              </ListItemIcon>
              <ListItemText primary="Voir les annonces" />
            </ListItem>
            <ListItem button onClick={() => onClickElement('add')}>
              <ListItemIcon>
                <AddCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Déposer une annonce" />
            </ListItem>
            <ListItem button onClick={() => onClickElement('detail')}>
              <ListItemIcon>
                <StarIcon />
              </ListItemIcon>
              <ListItemText primary="Mes annonces enregistrées" />
            </ListItem>
            <ListItem button onClick={() => onClickElement('detail')}>
              <ListItemIcon>
                <StoreIcon />
              </ListItemIcon>
              <ListItemText primary="Gérer mes annonces" />
            </ListItem>
          </List>
          <List>
            <ListItem button>
              <ListItemIcon>
                <ContactSupportIcon />
              </ListItemIcon>
              <ListItemText primary="Besoin d'aide ?" />
            </ListItem>
            <ListItem divider />
            {renderAccount()}
          </List>
        </Grid>
      </Drawer>
    </>
  )
}
/*
AppDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
}
*/
export default withStyles(styles)(withFirebase(AppDrawer))
