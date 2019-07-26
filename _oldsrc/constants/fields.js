export const fields = [
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