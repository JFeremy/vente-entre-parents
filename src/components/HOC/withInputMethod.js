import React, { useState } from 'react'

const withMethodInput = baseValue => WrappedComponent => {
  const HOC = props => {
    const [field, setField] = useState(baseValue)
    return (
      <WrappedComponent
        {...props}
        value={field}
        onChange={e => setField(e.target.value)}
      />
    )
  }

  return HOC
}
export default withMethodInput
