import React from 'react'
// A
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import AddCircleIcon from '@material-ui/icons/AddCircle'
// C
import CancelIcon from '@material-ui/icons/Cancel'
import CategoryIcon from '@material-ui/icons/Category'
import ChildCareIcon from '@material-ui/icons/ChildCare'
import ClearIcon from '@material-ui/icons/Clear'
import ContactMailIcon from '@material-ui/icons/ContactMail'
import ContactSupportIcon from '@material-ui/icons/ContactSupport'
// D
import DeleteIcon from '@material-ui/icons/Delete'
import DoneIcon from '@material-ui/icons/Done'
// E
import EuroSymbolIcon from '@material-ui/icons/EuroSymbol'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
// F
import FilterListIcon from '@material-ui/icons/FilterList'
// L
import LoupeIcon from '@material-ui/icons/Loupe'
// M
import MenuIcon from '@material-ui/icons/Menu'
// P
import PersonIcon from '@material-ui/icons/Person'
// S
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import StarIcon from '@material-ui/icons/Star'
import StoreIcon from '@material-ui/icons/Store'
// W
import WarningIcon from '@material-ui/icons/Warning'

export const itemsIcon = {
  // A
  account: {
    label: 'Mon compte',
    icon: <AccountCircleIcon />,
  },
  addArticle: {
    label: 'Ajouter une annonce',
    icon: <AddCircleIcon />,
  },
  addFavorites: {
    label: 'Ajouter aux favoris',
    icon: <StarIcon />,
  },
  age: {
    label: 'Age',
    icon: <ChildCareIcon />,
  },
  allArticles: {
    label: 'Voir les annonces',
    icon: <ShoppingCartIcon />,
  },
  // C
  cancel: {
    label: 'Annuler',
    icon: <ClearIcon />,
  },
  category: {
    label: 'Catégorie',
    icon: <CategoryIcon />,
  },
  contactSeller: {
    label: 'Contacter le vendeur',
    icon: <ContactMailIcon />,
  },
  // D
  delete: {
    label: 'Supprimer',
    icon: <DeleteIcon />,
  },
  // E
  expandLess: {
    label: 'Développer',
    icon: <ExpandMore />,
  },
  expandMore: {
    label: 'Réduire',
    icon: <ExpandLess />,
  },
  extendPhoto: {
    label: 'Agrandir',
    icon: <LoupeIcon />,
  },
  // F
  favoriteArticle: {
    label: 'Article favoris',
    icon: <StarIcon />,
  },
  filter: {
    label: 'Filtres',
    icon: <FilterListIcon />,
  },
  // P
  price: {
    label: 'Prix',
    icon: <EuroSymbolIcon />,
  },
  publish: {
    label: 'Publier',
    icon: <DoneIcon />,
  },
  // M
  manageArticles: {
    label: 'Gérer mes annonces',
    icon: <StoreIcon />,
  },
  menu: {
    label: 'Menu',
    icon: <MenuIcon />,
  },
  // N
  needHelp: {
    label: "Besoin d'aide ?",
    icon: <ContactSupportIcon />,
  },
  // R
  report: {
    label: 'Signaler',
    icon: <WarningIcon />,
  },
  reset: {
    label: 'Réinitialiser',
    icon: <CancelIcon />,
  },
  // S
  Sex: {
    label: 'Sexe',
    icon: <PersonIcon />,
  },
  signIn: {
    label: 'Se connecter',
    icon: <AccountCircleIcon />,
  },
  signOut: {
    label: 'Se déconnecter',
    icon: <ExitToAppIcon />,
  },
}
