import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import Switch from '@material-ui/core/Switch'
import WifiIcon from '@material-ui/icons/Wifi'
import BluetoothIcon from '@material-ui/icons/Bluetooth'

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
})

class Filter extends React.Component {
  state = {
    open: true,
    checked: ['wifi'],
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    })
  }

  handleToggle = value => () => {
    const { checked } = this.state
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    this.setState({
      checked: newChecked,
    })
  }

  render() {
    const { classes } = this.props

    const sideList = (
      <List
        subheader={
          <ListSubheader>
            <Typography gutterBottom variant="body1" align="center">
              Filtres
            </Typography>
          </ListSubheader>
        }
      >
        <Divider />
        <ListSubheader>Sexe</ListSubheader>
        <ListItem>
          <ListItemIcon>
            <WifiIcon />
          </ListItemIcon>
          <ListItemText primary="Wi-Fi" />
          <ListItemSecondaryAction>
            <Switch
              onChange={this.handleToggle('wifi')}
              checked={this.state.checked.indexOf('wifi') !== -1}
            />
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <BluetoothIcon />
          </ListItemIcon>
          <ListItemText primary="Bluetooth" />
          <ListItemSecondaryAction>
            <Switch
              onChange={this.handleToggle('bluetooth')}
              checked={this.state.checked.indexOf('bluetooth') !== -1}
            />
          </ListItemSecondaryAction>
        </ListItem>
        <Divider />
        <ListSubheader>Catégorie</ListSubheader>
        <ListItem>
          <ListItemIcon>
            <WifiIcon />
          </ListItemIcon>
          <ListItemText primary="Wi-Fi" />
          <ListItemSecondaryAction>
            <Switch
              onChange={this.handleToggle('wifi')}
              checked={this.state.checked.indexOf('wifi') !== -1}
            />
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <BluetoothIcon />
          </ListItemIcon>
          <ListItemText primary="Bluetooth" />
          <ListItemSecondaryAction>
            <Switch
              onChange={this.handleToggle('bluetooth')}
              checked={this.state.checked.indexOf('bluetooth') !== -1}
            />
          </ListItemSecondaryAction>
        </ListItem>
        <Divider />
        <ListSubheader>Age</ListSubheader>
        <ListItem>
          <ListItemIcon>
            <WifiIcon />
          </ListItemIcon>
          <ListItemText primary="Wi-Fi" />
          <ListItemSecondaryAction>
            <Switch
              onChange={this.handleToggle('wifi')}
              checked={this.state.checked.indexOf('wifi') !== -1}
            />
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <BluetoothIcon />
          </ListItemIcon>
          <ListItemText primary="Bluetooth" />
          <ListItemSecondaryAction>
            <Switch
              onChange={this.handleToggle('bluetooth')}
              checked={this.state.checked.indexOf('bluetooth') !== -1}
            />
          </ListItemSecondaryAction>
        </ListItem>
        <Divider />
        <ListSubheader>Prix</ListSubheader>
        <ListItem>
          <ListItemIcon>
            <WifiIcon />
          </ListItemIcon>
          <ListItemText primary="Wi-Fi" />
          <ListItemSecondaryAction>
            <Switch
              onChange={this.handleToggle('wifi')}
              checked={this.state.checked.indexOf('wifi') !== -1}
            />
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <BluetoothIcon />
          </ListItemIcon>
          <ListItemText primary="Bluetooth" />
          <ListItemSecondaryAction>
            <Switch
              onChange={this.handleToggle('bluetooth')}
              checked={this.state.checked.indexOf('bluetooth') !== -1}
            />
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    )

    return (
      <>
        <Button onClick={this.toggleDrawer('open', true)}>Open Filtre</Button>
        <Drawer
          anchor="right"
          variant="permanent"
          open={this.state.open}
          onClose={this.toggleDrawer('open', false)}
        >
          {sideList}
        </Drawer>
      </>
    )
  }
}

Filter.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Filter)
