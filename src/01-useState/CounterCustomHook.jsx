import React from 'react'
import { useCounter } from '../hooks/useCounter'

export const CounterCustomHook = () => {
    
    const { count, increment, decrement, reset } = useCounter(); 
  
    return (
        <>
            <p>CounterCustomHook: { count }</p>

            <hr />

            <button onClick={ () => increment(2) } className='btn btn-primary'>+ 1</button>
            <button onClick={ reset } className='btn btn-danger'>Reset</button>
            <button onClick={ () => decrement(2) } className='btn btn-primary'>- 1</button>
        </>
    )
}
 