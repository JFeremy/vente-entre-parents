import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import Collapse from '@material-ui/core/Collapse'
import Switch from '@material-ui/core/Switch'
import Checkbox from '@material-ui/core/Checkbox'
import TextField from '@material-ui/core/TextField'
import ListSubheader from '@material-ui/core/ListSubheader'

import CancelIcon from '@material-ui/icons/Cancel'
import ChildCareIcon from '@material-ui/icons/ChildCare'
import EuroSymbolIcon from '@material-ui/icons/EuroSymbol'
import CategoryIcon from '@material-ui/icons/Category'
import PersonIcon from '@material-ui/icons/Person'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'

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
  textField: {
    maxWidth: '100px',
  },
})

const Filter = props => {
  const { classes } = props

  const [state, setState] = useState({
    open: true,
    col_sex: false,
    col_category: false,
    col_age: false,
    col_price: false,
  })

  function isItem(item, ref) {
    return item === ref ? !state[item] : false
  }

  function handleToggleCollapse(item) {
    const _state = {
      col_sex: isItem(item, 'col_sex'),
      col_category: isItem(item, 'col_category'),
      col_age: isItem(item, 'col_age'),
      col_price: isItem(item, 'col_price'),
    }

    setState({
      ...state,
      col_sex: _state.col_sex,
      col_category: _state.col_category,
      col_age: _state.col_age,
      col_price: _state.col_price,
    })
  }

  function handleChange(event) {
    if (event.target) {
      setState({
        ...state,
        [event.target.name]: event.target.value,
      })
    }
  }

  return (
    <Drawer
      anchor="right"
      variant="permanent"
      open={state.open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Grid
        className={classes.toolbar}
        container
        direction="column"
        justify="space-between"
        alignItems="stretch"
      >
        <List
          dense
          component="nav"
          subheader={<ListSubheader component="div">Filtres</ListSubheader>}
        >
          <ListItem
            dense
            button
            onClick={() => handleToggleCollapse('col_sex')}
          >
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{ variant: 'caption' }}
              inset
              primary="Sexe"
            />
            {state.col_sex ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={state.col_sex} timeout="auto" unmountOnExit>
            <List component="div">
              <ListItem dense button>
                <ListItemText
                  primaryTypographyProps={{ variant: 'caption' }}
                  primary="Mixte"
                  inset
                />
                <ListItemSecondaryAction>
                  <Switch />
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem dense button>
                <ListItemText
                  primaryTypographyProps={{ variant: 'caption' }}
                  primary="Fille"
                  inset
                />
                <ListItemSecondaryAction>
                  <Switch />
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem dense button>
                <ListItemText
                  primaryTypographyProps={{ variant: 'caption' }}
                  primary="Garçon"
                  inset
                />
                <ListItemSecondaryAction>
                  <Switch />
                </ListItemSecondaryAction>
              </ListItem>
            </List>
          </Collapse>

          <ListItem dense divider />
          <ListItem
            dense
            button
            onClick={() => handleToggleCollapse('col_category')}
          >
            <ListItemIcon>
              <CategoryIcon />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{ variant: 'caption' }}
              inset
              primary="Catégorie"
            />
            {state.col_category ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={state.col_category} timeout="auto" unmountOnExit>
            <List component="div">
              <ListItem dense button>
                <ListItemText
                  primaryTypographyProps={{ variant: 'caption' }}
                  primary="Autre"
                  inset
                />
                <ListItemSecondaryAction>
                  <Checkbox />
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem dense button>
                <ListItemText
                  primaryTypographyProps={{ variant: 'caption' }}
                  primary="Vêtement"
                  inset
                />
                <ListItemSecondaryAction>
                  <Checkbox />
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem dense button>
                <ListItemText
                  primaryTypographyProps={{ variant: 'caption' }}
                  primary="Jouet"
                  inset
                />
                <ListItemSecondaryAction>
                  <Checkbox />
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem dense button>
                <ListItemText
                  primaryTypographyProps={{ variant: 'caption' }}
                  primary="Equipement"
                  inset
                />
                <ListItemSecondaryAction>
                  <Checkbox />
                </ListItemSecondaryAction>
              </ListItem>
            </List>
          </Collapse>

          <ListItem dense divider />
          <ListItem
            dense
            button
            onClick={() => handleToggleCollapse('col_age')}
          >
            <ListItemIcon>
              <ChildCareIcon />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{ variant: 'caption' }}
              inset
              primary="Age"
            />
            {state.col_age ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={state.col_age} timeout="auto" unmountOnExit>
            <List>
              <ListItem className={classes.nested} dense>
                <ListItemText
                  primaryTypographyProps={{ variant: 'caption' }}
                  inset
                  primary={
                    <TextField
                      className={classes.textField}
                      margin="dense"
                      id="outlined-name"
                      label="Age min"
                    />
                  }
                />
              </ListItem>
              <ListItem className={classes.nested} dense>
                <ListItemText
                  primaryTypographyProps={{ variant: 'caption' }}
                  inset
                  primary={
                    <TextField
                      className={classes.textField}
                      margin="dense"
                      id="outlined-name"
                      label="Age max"
                    />
                  }
                />
              </ListItem>
            </List>
          </Collapse>

          <ListItem dense divider />
          <ListItem
            dense
            button
            onClick={() => handleToggleCollapse('col_price')}
          >
            <ListItemIcon>
              <EuroSymbolIcon />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{ variant: 'caption' }}
              inset
              primary="Prix"
            />
            {state.col_price ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={state.col_price} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem className={classes.nested} dense>
                <ListItemText
                  primaryTypographyProps={{ variant: 'caption' }}
                  inset
                  primary={
                    <TextField
                      className={classes.textField}
                      margin="dense"
                      id="outlined-name"
                      label="prix min"
                    />
                  }
                />
              </ListItem>
              <ListItem className={classes.nested} dense>
                <ListItemText
                  primaryTypographyProps={{ variant: 'caption' }}
                  inset
                  primary={
                    <TextField
                      className={classes.textField}
                      margin="dense"
                      id="outlined-name"
                      label="prix max"
                    />
                  }
                />
              </ListItem>
            </List>
          </Collapse>
        </List>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          <CancelIcon />
          Réinitialiser
        </Button>
      </Grid>
    </Drawer>
  )
}

Filter.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Filter)
