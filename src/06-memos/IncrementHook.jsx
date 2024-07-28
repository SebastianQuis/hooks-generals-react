
import React, { memo } from 'react'

export const IncrementHook = React.memo(( { increment } ) => {
    console.log('Me volví a renderizar :(');
  
    return (
    <button
        className='btn btn-outline-primary'
        onClick={ () => increment() }
    >
        +1 
    </button>
  )
})
