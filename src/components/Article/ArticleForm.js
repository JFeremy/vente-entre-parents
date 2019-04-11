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
  const fields = [
    {
      label: 'Titre',
      id: 'title',
      type: 'text',
    },
    {
      label: 'Description',
      id: 'description',
      type: 'text',
    },
    {
      label: 'Sexe',
      id: 'sex',
      type: 'select',
      options: [
        {
          value: 'default',
          text: 'Unisexe',
        },
        {
          value: 'girl',
          text: 'Fille',
        },
        {
          value: 'boy',
          text: 'Garçon',
        },
      ],
    },
    {
      label: 'Catégorie',
      id: 'category',
      type: 'select',
      options: [
        {
          value: 'default',
          text: 'Autre(s)',
        },
        {
          value: 'clothes',
          text: 'Vêtement(s)',
        },
        {
          value: 'toys',
          text: 'Jouet(s)',
        },
        {
          value: 'equipment',
          text: 'Equipement(s)',
        },
      ],
    },
    {
      label: 'A partir de ',
      id: 'ageBegin',
      type: 'select',
      options: [
        { value: 'default', text: 'Indéfini' },
        { value: '0', text: 'Naissance' },
        { value: '0.1', text: '1 mois' },
        { value: '0.2', text: '3 mois' },
        { value: '0.5', text: '6 mois' },
        { value: '0.7', text: '9 mois' },
        { value: '1', text: '12 mois' },
        { value: '1.5', text: '18 mois' },
        { value: '2', text: '2 ans' },
        { value: '3', text: '3 ans' },
        { value: '4', text: '4 ans' },
        { value: '5', text: '5 ans' },
        { value: '6', text: '6 ans' },
        { value: '7', text: '7 ans' },
        { value: '8', text: '8 ans' },
        { value: '9', text: '9 ans' },
        { value: '10', text: '10 ans' },
        { value: '11', text: '11 ans' },
        { value: '12', text: '12 ans' },
        { value: '13', text: '13 ans' },
        { value: '14', text: '14 ans' },
      ],
    },
    {
      label: "Jusqu'à  ",
      id: 'ageEnd',
      type: 'select',
      options: [
        { value: 'default', text: 'Indéfini' },
        { value: '0', text: 'Naissance' },
        { value: '0.1', text: '1 mois' },
        { value: '0.2', text: '3 mois' },
        { value: '0.5', text: '6 mois' },
        { value: '0.7', text: '9 mois' },
        { value: '1', text: '12 mois' },
        { value: '1.5', text: '18 mois' },
        { value: '2', text: '2 ans' },
        { value: '3', text: '3 ans' },
        { value: '4', text: '4 ans' },
        { value: '5', text: '5 ans' },
        { value: '6', text: '6 ans' },
        { value: '7', text: '7 ans' },
        { value: '8', text: '8 ans' },
        { value: '9', text: '9 ans' },
        { value: '10', text: '10 ans' },
        { value: '11', text: '11 ans' },
        { value: '12', text: '12 ans' },
        { value: '13', text: '13 ans' },
        { value: '14', text: '14 ans' },
      ],
    },
    {
      label: 'Prix',
      id: 'price',
      type: 'number',
    },
  ]
  const photos = ['photo1', 'photo2', 'photo3', 'photo4', 'photo5']
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
