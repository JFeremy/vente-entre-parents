import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

import DoneIcon from '@material-ui/icons/Done'
import ClearIcon from '@material-ui/icons/Clear'

import ArticleButtons from './ArticleButtons'
import ArticleFieldText from './ArticleFieldText'
import AddFieldFormat from '../RP/AddFieldFormat'

import { fields } from '../../constants/fields'
import { photos } from '../../constants/photos'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  divPart: {
    marginTop: theme.spacing.unit * 2,
  },
  button: {
    margin: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
})

const ArticleForm = props => {
  const { classes } = props
  const [state, setState] = useState({
    title: '',
    description: '',
    sex: 'default',
    category: 'default',
    ageBegin: 'default',
    ageEnd: 'default',
    price: '',
    photo1: '',
    photo2: '',
    photo3: '',
    photo4: '',
    photo5: '',
  })

  useEffect(() => {
    setState({
      ...state,
    })
  }, [state])

  function handleChange(event) {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <Paper className={classes.root} elevation={1}>
      <Typography gutterBottom variant="h4" align="center">
        Déposer une annonce
      </Typography>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="flex-start"
        spacing={16}
      >
        {fields.map(field => (
          <AddFieldFormat
            key={field.id}
            size={5}
            errorText=""
            render={() => (
              <ArticleFieldText
                label={field.label}
                id={field.id}
                fieldtype={field.type}
                value={state[field.id]}
                onChange={handleChange}
                options={field.options}
                required={field.type !== 'select'}
              />
            )}
          />
        ))}
        <Grid item xs={12}>
          <Divider />
          <Grid
            className={classes.divPart}
            container
            direction="row"
            justify="space-evenly"
            alignItems="flex-start"
            spacing={16}
          >
            <Grid item xs={12}>
              <Typography gutterBottom variant="h6" align="center">
                Ajouter des photos
              </Typography>
            </Grid>
            {photos.map(photo => (
              <AddFieldFormat
                key={photo}
                size={5}
                errorText=""
                render={() => (
                  <ArticleFieldText
                    id={photo}
                    fieldtype="file"
                    value={state[photo]}
                    onChange={handleChange}
                    helperText={
                      photo === 'photo1'
                        ? 'Photo de couverture*'
                        : 'Photo facultative'
                    }
                    required={photo === 'photo1'}
                  />
                )}
              />
            ))}
          </Grid>
        </Grid>
      </Grid>
      <ArticleButtons
        leftText="Annuler"
        leftIcon={<ClearIcon className={classes.rightIcon} />}
        rightText="Publier"
        rightIcon={<DoneIcon className={classes.rightIcon} />}
      />
    </Paper>
  )
}

ArticleForm.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ArticleForm)
