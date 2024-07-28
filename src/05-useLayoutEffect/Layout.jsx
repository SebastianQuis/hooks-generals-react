import React from 'react'

import { LoadingMessage, PokemonCard } from '../03-pokemon/index';
import { useCounter } from '../hooks/useCounter';
import { useFetch } from '../hooks/useFetch';


export const Layout = () => {

    const {count, increment, decrement} = useCounter(1);
    const {data, isLoading, hasError} = 
        useFetch(`https://pokeapi.co/api/v2/pokemon/${count}`)

        
    return (
        <>
            <h1>Layout</h1>
            
            <hr />
            {
                isLoading 
                    ? ( <LoadingMessage/> )
                    : ( <PokemonCard  data={data}/> )        
            }

            <button
                className='btn btn-primary mt-2'
                onClick={() => decrement()}
            > 
                Anterior
            </button>
            
            <button
                className='btn btn-primary mt-2'
                onClick={() => increment()}
            > 
                Siguiente
            </button>
            
        </>
    )
}
