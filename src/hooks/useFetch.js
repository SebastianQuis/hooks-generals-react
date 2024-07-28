import { useEffect, useState } from "react"

const localCache = {}


export const useFetch = (url) => {
  
    const [pokemon, setPokemon] = useState({
        data: null,
        isLoading: true,
        hasError: null,
        error: null
    })

    const setLoadingState = () => {
        setPokemon({
            data: null,
            isLoading: true,
            hasError: null,
            error: null
        });
    } 


    useEffect(() => {
      getFetch();
    }, [url]) // LA URL VA A CAMBIAR CON CLIC EN EL BUTTON, 
    // SE NECESITA GESTIONAR EL ESTADO. 
        
  
    const getFetch = async () => { // NO HACER 2 SOLICITUDES HTTP, MANEJO DE CACHÉ
        if (localCache[url]) {
            setPokemon({
                data: localCache[url],
                isLoading: false,
                hasError: false,
                error: null
            })
            // console.log('YA ESTA EN EL CACHÉ LA URL');
            return;
        }

        setLoadingState();                                  // limpie la data anterior
        const resp = await fetch(url);                      // fetch al endpoint
        await new Promise( resolve => setTimeout(resolve, 500) ); // delayed

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
        setPokemon({
            data: data,
            isLoading: false,
            hasError: false,
            error: null
        });

        // manejo de caché
        localCache[url] = data;
    }

    return {
        data: pokemon.data,
        isLoading: pokemon.isLoading,
        hasError: pokemon.hasError
    }

}


