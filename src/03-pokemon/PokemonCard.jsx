import React, { useLayoutEffect, useRef } from 'react'

export const PokemonCard = ( {data} ) => {
    const {order, name, sprites} = data;

    const pRef = useRef();
    
    const spritesArr = [
      sprites.front_default,
      sprites.front_shiny,
      sprites.back_default,
      sprites.back_shiny
    ]

    useLayoutEffect( () => {
      const {height, width} = pRef.current.getBoundingClientRect();
      // todo - hallando las dimensiones de los componentes
      console.log(`${height} - ${width}`);
    }, )
    

    return (
    <section
        // style={ {height: 400} }
        className='alert alert-info text-center d-flex align-items-center justify-content-center'
    >
        <p><strong>{ order }.</strong> { name }</p>
        {/* <img src={sprites.back_default}/>       */}
    
      {
        spritesArr.map( sprite => {
          return (<img ref={ pRef } key={ sprite } src={sprites.back_default}/>)
        })
      }

    </section>
  )
}
