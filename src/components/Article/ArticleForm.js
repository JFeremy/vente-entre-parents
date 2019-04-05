import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import MenuItem from '@material-ui/core/MenuItem'
import Paper from '@material-ui/core/Paper'
import Input from '@material-ui/core/Input'
import Select from '@material-ui/core/Select'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'

import DoneIcon from '@material-ui/icons/Done'
import ClearIcon from '@material-ui/icons/Clear'
import ChildCareIcon from '@material-ui/icons/ChildCare'
import EuroSymbolIcon from '@material-ui/icons/EuroSymbol'
import TitleIcon from '@material-ui/icons/Title'
import TextFieldsIcon from '@material-ui/icons/TextFields'
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate'

import ArticleFormInput from './ArticleFormInput'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
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
})

const ArticleForm = props => {
  const { classes } = props
  return (
    <Paper className={classes.root} elevation={1}>
      <Typography gutterBottom variant="h4" align="center">
        Déposer une annonce
      </Typography>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
        spacing={16}
      >
        <Grid item xs={5}>
          <ArticleFormInput label="Titre" icon={<TitleIcon />}>
            <TextField
              id="article-title"
              placeholder="Titre de l'annonce"
              fullWidth
              required
            />
          </ArticleFormInput>

          <ArticleFormInput
            label="Description"
            icon={<TextFieldsIcon />}
            errorText="Trop court"
          >
            <TextField
              id="article-description"
              multiline
              placeholder="Description de ce que vous vendez"
              rowsMax={20}
              fullWidth
              required
            />
          </ArticleFormInput>

          <ArticleFormInput label="Sexe" icon={<ChildCareIcon />}>
            <Select
              value="unisex"
              fullWidth
              onChange={undefined}
              inputProps={{
                name: 'sex',
                id: 'article-sex',
              }}
            >
              <MenuItem value="unisex">Unisexe</MenuItem>
              <MenuItem value="girl">Fille</MenuItem>
              <MenuItem value="boy">Garçon</MenuItem>
            </Select>
          </ArticleFormInput>

          <ArticleFormInput label="Prix" icon={<EuroSymbolIcon />}>
            <Input fullWidth id="article-price" placeholder="Prix" required />
          </ArticleFormInput>
        </Grid>

        <Grid item xs={5}>
          <Divider component="br" />
          <Typography gutterBottom variant="body1" align="center">
            Ajouter des photos (1 photo obligatoire)
          </Typography>
          <ArticleFormInput label="" icon={<AddPhotoAlternateIcon />}>
            <Input
              fullWidth
              type="file"
              id="article-photo1"
              name="photo1"
              required
            />
          </ArticleFormInput>
          <ArticleFormInput label="" icon={<AddPhotoAlternateIcon />}>
            <Input
              fullWidth
              type="file"
              id="article-photo2"
              name="photo2"
              required
            />
          </ArticleFormInput>
          <ArticleFormInput label="" icon={<AddPhotoAlternateIcon />}>
            <Input
              fullWidth
              type="file"
              id="article-photo3"
              name="photo3"
              required
            />
          </ArticleFormInput>
          <ArticleFormInput label="" icon={<AddPhotoAlternateIcon />}>
            <Input
              fullWidth
              type="file"
              id="article-photo4"
              name="photo4"
              required
            />
          </ArticleFormInput>
          <ArticleFormInput label="" icon={<AddPhotoAlternateIcon />}>
            <Input
              fullWidth
              type="file"
              id="article-photo5"
              name="photo5"
              required
            />
          </ArticleFormInput>
        </Grid>
      </Grid>

      <Grid
        className={classes.buttons}
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
        spacing={16}
      >
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          Annuler
          <ClearIcon className={classes.rightIcon} />
        </Button>
        <Button variant="contained" color="primary" className={classes.button}>
          Publier
          <DoneIcon className={classes.rightIcon} />
        </Button>
      </Grid>
    </Paper>
  )
}

ArticleForm.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ArticleForm)
