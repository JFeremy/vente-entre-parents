import React from 'react'
import renderer from 'react-test-renderer'

import ArticlePreview from '../Article/ArticlePreview'

describe('ArticlePreview', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <ArticlePreview
          title="Lot de vêtement pour fille"
          sex="fille"
          size={['3 mois', '12 mois']}
          price="50"
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
