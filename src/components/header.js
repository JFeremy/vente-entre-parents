import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import FilterListIcon from '@material-ui/icons/FilterList'

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  leftButton: {
    marginRight: 20,
  },
  rightButton: {
    marginLeft: 20,
  },
})

const Header = props => {
  const { classes, siteTitle } = props
  return (
    <div>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            className={classes.leftButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            <Link
              to="/"
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              {siteTitle}
            </Link>
          </Typography>
          <IconButton
            className={classes.rightButton}
            color="inherit"
            aria-label="Filtre"
          >
            <FilterListIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Header)
