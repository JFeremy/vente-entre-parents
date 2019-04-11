import React from 'react'
import PropTypes from 'prop-types'

import Typography from '@material-ui/core/Typography'

const ArticleDetailField = ({ align, variant, text }) => (
  <Typography gutterBottom variant={variant} align={align}>
    {text}
  </Typography>
)

export default ArticleDetailField
