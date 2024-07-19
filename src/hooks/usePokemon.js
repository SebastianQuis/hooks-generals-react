import { useEffect, useState } from "react"


export const usePokemon = (url) => {
  
    const [pokemon, setPokemon] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null
    })


    useEffect(() => {
        
      getPokemon();
    }, [])
        
  
    const getPokemon = async () => {
        const resp = await fetch(url);
        
        if (!resp.ok) {
            setPokemon({
                data: null,
                isLoading: false,
                hasError: true,
                error: resp.text
            });
            return;
        }

        const data = await resp.json();
        // console.log({data});
        setPokemon({
            data: data,
            isLoading: false,
            hasError: false,
            error: null
        });
        
        // console.log(pokemon.data);

    }

    return {
        data: pokemon.data,
        isLoading: pokemon.isLoading,
        hasError: pokemon.hasError
    }

}


