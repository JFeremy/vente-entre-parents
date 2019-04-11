import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'

const styles = theme => ({
  field: {
    marginBottom: theme.spacing.unit * 2,
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

const AddFieldFormat = props => {
  const { classes, size = 12, prefix = '', errorText = '', render } = props
  return (
    <Grid item xs={size} className={classes.field}>
      <FormControl component="fieldset" fullWidth>
        <div className={classes.divInput}>
          {prefix}
          <div className={classes.input}>
            {render(...props)}
            {errorText && (
              <FormHelperText error>{errorText.toUpperCase()}</FormHelperText>
            )}
          </div>
        </div>
      </FormControl>
    </Grid>
  )
}

export default withStyles(styles)(AddFieldFormat)
