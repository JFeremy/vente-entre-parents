import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const styles = {
  card: {
    maxWidth: 300,
  },
  media: {
    height: 140,
  },
}

const ArticlePreview = props => {
  const { classes, title, sex, size, price } = props
  return (
    <Card className={classes.card} raised>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://i2.cdscdn.com/pdt2/0/6/6/1/700x700/mp09604066/rw/mode-fille-2-pcs-ensemble-de-vetement-top-licorne.jpg"
          title="Contemplative Reptile"
        />
        <Typography gutterBottom variant="h6" align="center">
          {title}
        </Typography>
        <Typography gutterBottom variant="caption" align="center">
          <strong>Sexe:</strong> {sex}
        </Typography>
        <Typography gutterBottom variant="caption" align="center">
          <strong>Taille(s):</strong>{' '}
          {size.length === 2 ? `${size[0]} - ${size[1]} ` : `${size[0]}`}
        </Typography>
        <Typography gutterBottom variant="h6" align="center" color="primary">
          {price} €
        </Typography>
      </CardActionArea>
    </Card>
  )
}

ArticlePreview.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  sex: PropTypes.string.isRequired,
  size: PropTypes.array.isRequired,
  price: PropTypes.number.isRequired,
}

export default withStyles(styles)(ArticlePreview)
