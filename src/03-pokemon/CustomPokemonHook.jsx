
import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { useCounter } from '../hooks/useCounter'
import { LoadingMessage, PokemonCard } from './index';


export const CustomPokemonHook = () => {

    // llamar metodo
    let {count, increment, decrement} = useCounter(1);
    let {data, isLoading, hasError} = 
        useFetch(`https://pokeapi.co/api/v2/pokemon/${count}`)

    console.log(data);

    return (
        <>
            <h1>CustomPokemonHook</h1>
            
            <hr />
            {
                isLoading 
                    ? ( <LoadingMessage/> )
                    : ( <PokemonCard  data={data}/> )        
            }

            <button
                className='btn btn-primary mt-2'
                // disabled= { true }
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
