import React from 'react'

import TextField from '@material-ui/core/TextField'

function ArticleFieldText(props) {
  const { id, text = '', fieldtype } = props

  switch (fieldtype) {
    case 'select':
      return (
        <TextField
          select
          fullWidth
          id={id}
          label={text}
          SelectProps={{
            native: true,
            name: `${id}`,
          }}
          {...props}
        >
          {props.options &&
            props.options.map(option => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
        </TextField>
      )
    case 'file':
      return (
        <TextField
          id={id}
          label={text}
          fullWidth
          {...props}
          InputProps={{
            type: 'file',
            name: `${id}`,
          }}
        />
      )

    case 'text':
    default:
      return <TextField id={id} label={text} fullWidth {...props} />
  }
}
/*
ArticleFieldText.propTypes = {
  classes: PropTypes.object.isRequired,
}
*/

export default ArticleFieldText
