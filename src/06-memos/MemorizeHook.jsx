import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useCounter } from '../hooks/useCounter'


const heavyStuff = ( value = 500 ) => {
    for (let i = 0; i < value ; i++) {
        console.log(`renderizado: ${i}`);
    }

    return `Renderizaciones: ${ value }`
}


export const MemorizeHook = () => {
    const {count, increment } = useCounter(20);
    const [ show, setShow ] = useState( true );

    const memoHeavyStuff = useMemo( 
        () => {
            heavyStuff()
        }, [count] )

    return (
        <>
            <h1>Counter <small> { count } </small> </h1>
            <hr />
            <p> {memoHeavyStuff } </p>

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
