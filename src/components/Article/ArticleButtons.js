import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

const styles = theme => ({
  divPart: {
    marginTop: theme.spacing.unit * 2,
  },
  button: {
    margin: theme.spacing.unit,
  },
})

const ArticleButtons = props => {
  const {
    classes,
    leftText,
    leftIcon,
    leftAction,
    rightText,
    rightIcon,
    rightAction,
  } = props
  return (
    <Grid
      className={classes.divPart}
      container
      direction="row"
      justify="space-between"
      alignItems="flex-start"
      spacing={16}
    >
      <Button variant="contained" color="secondary" className={classes.button}>
        {leftText}
        {leftIcon}
      </Button>
      <Button variant="contained" color="primary" className={classes.button}>
        {rightText}
        {rightIcon}
      </Button>
    </Grid>
  )
}
/*
ArticleButtons.propTypes = {
  classes: PropTypes.object.isRequired,
}
*/

export default withStyles(styles)(ArticleButtons)
