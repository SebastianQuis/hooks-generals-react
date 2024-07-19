
import React, { useEffect, useState } from 'react'

export const Message = () => {

  const [coords, setCoords] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const getCoords = ({x, y}) => {
      // console.log(`${x} - ${y}`);
      // const coords = {x,y}
      setCoords( {x,y} )
    }

    window.addEventListener( 'mousemove', getCoords) // parameters: sending event

    return () => { // like DISPOSE in flutter
      window.removeEventListener( 'mousemove', getCoords) 
    }
  }, [])
  

  return (
    <>
      <p className='mt-3'>Usuario ya existe!!</p>
      {/* <p>{ coords.x }</p>
      <p>{ coords.y }</p> */}
      {
        JSON.stringify(coords)
      }
    </>
  )
}



