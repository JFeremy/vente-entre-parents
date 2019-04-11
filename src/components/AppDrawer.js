import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import ListSubheader from '@material-ui/core/ListSubheader'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import StoreIcon from '@material-ui/icons/Store'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import ContactSupportIcon from '@material-ui/icons/ContactSupport'

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  fullList: {
    width: 'auto',
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
})

class AppDrawer extends React.Component {
  state = {
    left: true,
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    })
  }

  render() {
    //const { classes } = this.props

    const sideList = (
      <List>
        <ListItem button>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText inset primary="Voir les annonces" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AddCircleIcon />
          </ListItemIcon>
          <ListItemText inset primary="Déposer une annonce" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <StoreIcon />
          </ListItemIcon>
          <ListItemText inset primary="Voir mes annonces" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ContactSupportIcon />
          </ListItemIcon>
          <ListItemText inset primary="Besoin d'aide ?" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText inset primary="Mon compte" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText inset primary="Se déconnecter" />
        </ListItem>
      </List>
    )

    return (
      <>
        <Button onClick={this.toggleDrawer('left', true)}>Open Left</Button>
        <Drawer
          variant="permanent"
          open={this.state.left}
          onClose={this.toggleDrawer('left', false)}
        >
          {sideList}
        </Drawer>
      </>
    )
  }
}
/*
AppDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
}
*/
export default withStyles(styles)(AppDrawer)
