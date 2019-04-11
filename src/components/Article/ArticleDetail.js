import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'

import StarIcon from '@material-ui/icons/Star'
import ContactMailIcon from '@material-ui/icons/ContactMail'
import IconButton from '@material-ui/core/IconButton'
import LoupeIcon from '@material-ui/icons/Loupe'

import ArticleButtons from './ArticleButtons'
import AddFieldFormat from '../RP/AddFieldFormat'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  divider: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
  },
  buttons: {
    marginTop: theme.spacing.unit * 2,
  },
  button: {
    margin: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  imageBar: {
    color: 'white',
  },
})

const ArticleDetail = props => {
  const { classes } = props
  const {
    title,
    description,
    sex,
    age,
    category,
    price,
    seller,
    photos,
  } = props.article

  const fields = [
    {
      label: 'Catégorie',
      text: category,
    },
    {
      label: 'Sexe',
      text: sex,
    },
    {
      label: 'Age',
      text: age,
    },
    {
      label: 'Prix',
      text: `${price} €`,
    },
  ]

  const prefix = text => (
    <Typography variant="body2" align="left">
      <strong>{text} : </strong>
    </Typography>
  )
  return (
    <Paper className={classes.root} elevation={1}>
      <Typography gutterBottom variant="h4" align="center">
        {title}
      </Typography>
      <Divider className={classes.divider} />
      <Typography gutterBottom variant="subtitle1">
        {description}
      </Typography>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="stretch"
      >
        <Grid item xs={12} md={6}>
          {fields.map(field => (
            <AddFieldFormat
              key={field.label}
              prefix={prefix(field.label)}
              render={() => (
                <Typography variant="body2" align="left">
                  {field.text}
                </Typography>
              )}
            />
          ))}
        </Grid>
        <Grid item xs={12} md={6}>
          <GridList className={classes.gridList} cols={1.5}>
            {photos.map(photo => (
              <GridListTile key={photo.link}>
                <img src={photo.link} alt="vetement" />
                <GridListTileBar
                  title="test"
                  actionIcon={
                    <IconButton>
                      <LoupeIcon className={classes.imageBar} />
                    </IconButton>
                  }
                />
              </GridListTile>
            ))}
          </GridList>
        </Grid>
      </Grid>
      <ArticleButtons
        leftText="Ajouter au favoris"
        leftIcon={<StarIcon className={classes.rightIcon} />}
        rightText="Contacter le vendeur"
        rightIcon={<ContactMailIcon className={classes.rightIcon} />}
      />
    </Paper>
  )
}

ArticleDetail.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ArticleDetail)
