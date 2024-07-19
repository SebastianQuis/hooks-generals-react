
import React, { useEffect } from 'react'
import { usePokemon } from '../hooks/usePokemon'

export const CustomPokemonHook = () => {

    // llamar metodo
    const {data, isLoading, hasError} = usePokemon('https://pokeapi.co/api/v2/pokemon/2')

    console.log(data);
    // const { abilities }  = data;
    // console.log(abilities);

    // console.log(`data: ${JSON.stringify(data)}`);

    // useEffect(() => {
    //     console.log('usePokemon called!!');
    // }, [])
    

  
    return (
        <>
            <h1>CustomPokemonHook</h1>
            
            <hr />

            {
                isLoading ?? ( <p>Cargando..</p> )
            }

            <p>{ data?.name }</p>
            
        </>
    )
}
