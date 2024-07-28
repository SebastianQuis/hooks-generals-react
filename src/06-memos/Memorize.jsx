import React, { useState } from 'react'
import { useCounter } from '../hooks/useCounter'
import { SmallCounter } from './SmallCounter';

export const Memorize = () => {
  
    const {count, increment } = useCounter(20);
    const [ show, setShow ] = useState( true );

    return (
        <>
            <h1>Counter <SmallCounter value={count} /> </h1>
            <hr />

            <button
                className='btn btn-outline-primary'
                onClick={ () => increment() }
            >
                +1
            </button>

            <button
                className='btn btn-primary'
                onClick={ () => setShow( !show ) }
            >
                Show hide/true: { JSON.stringify( show ) }
            </button>

        </>
    )
}
