import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import FormHelperText from '@material-ui/core/FormHelperText'

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

const ArticleFormInput = ({ classes, label, icon, errorText, children }) => (
  <FormControl className={classes.root} component="fieldset" fullWidth>
    <FormLabel component="legend">{label}</FormLabel>
    <div className={classes.divInput}>
      {icon}
      <div className={classes.input}>{children}</div>
    </div>
    {errorText && (
      <FormHelperText error id={`error-${label}`}>
        {errorText.toUpperCase()}
      </FormHelperText>
    )}
  </FormControl>
)

ArticleFormInput.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.element,
  children: PropTypes.element.isRequired,
}
export default withStyles(styles)(ArticleFormInput)
