import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Badge from '@material-ui/core/Badge'
import Chip from '@material-ui/core/Chip'
import Grid from '@material-ui/core/Grid'

import CloseIcon from '@material-ui/icons/Close'
import StarIcon from '@material-ui/icons/Star'

const styles = theme => ({
  card: {
    maxWidth: 300,
    padding: theme.spacing.unit,
  },
  media: {
    height: 140,
  },
})

const ArticlePreview = props => {
  const {
    classes,
    title,
    sex,
    age,
    category,
    price,
    nbView,
    isFavorite,
  } = props
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
          <strong>Catégorie:</strong> {category}
        </Typography>
        <Typography gutterBottom variant="caption" align="center">
          <strong>Age:</strong>{' '}
          {age.length === 2 ? `${age[0]} - ${age[1]} ` : `${age[0]}`}
        </Typography>
        <Typography gutterBottom variant="h6" align="center" color="primary">
          {price} €
        </Typography>
        {isFavorite && (
          <Grid container direction="row" justify="center" alignItems="center">
            <Chip
              icon={<StarIcon />}
              label="Annonce enregistrée"
              onDelete={() => {
                alert('RETIRER DES FAVORIS')
              }}
              color="secondary"
              deleteIcon={<CloseIcon />}
              variant="outlined"
            />
          </Grid>
        )}
      </CardActionArea>
    </Card>
  )
}

ArticlePreview.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  sex: PropTypes.string.isRequired,
  age: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  nbView: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
}

export default withStyles(styles)(ArticlePreview)
