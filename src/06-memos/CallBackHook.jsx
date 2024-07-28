
import React, { useCallback, useState } from 'react'
import { IncrementHook } from './IncrementHook'

export const CallBackHook = () => {
  
    const [count, setCount] = useState(10)

    const increment = ( valueSum ) => useCallback(
        () => {
            setCount( (value) => value + valueSum )
        }, []
    )
    
    return (
        <>
            <h1>Counter { count }</h1>
            <hr />

            {/* <button
                className='btn btn-outline-primary'
                // onClick={ () => increment() }
            > +1 </button> */}
            <IncrementHook increment={ increment( 5 ) } /> 
        </>
    )
}

