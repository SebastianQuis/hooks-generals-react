import React, { memo } from 'react'

export const SmallCounter = memo( ({ value }) => { // React.memo
 
    // todo - memo sirve para poder renderizar la vez que sea necesaria
    // todo - o la vez que detecte un cambio en el componente establecitdo
    console.log('me volví a renderizar :(');
  
    return (
        <small> { value } </small>
    )
})
