import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'

const withFormatFiled = prefix => WrappedComponent => {
  const styles = theme => ({
    root: {
      marginTop: theme.spacing.unit * 3,
    },
    divInput: {
      display: 'flex',
      alignItems: 'center',
    },
    input: {
      marginLeft: 8,
      flex: 1,
    },
  })

  const HOC = props => {
    const { classes } = props
    const errorText = ''
    return (
      <Grid item xs={5} className={classes.root}>
        <FormControl component="fieldset" fullWidth>
          <div className={classes.divInput}>
            {prefix}
            <div className={classes.input}>
              <WrappedComponent {...props} />
              {errorText && (
                <FormHelperText error>{errorText.toUpperCase()}</FormHelperText>
              )}
            </div>
          </div>
        </FormControl>
      </Grid>
    )
  }

  return withStyles(styles)(HOC)
}

export default withFormatFiled
