import React, { useState } from 'react'

export const CounterApp = () => {
    const [ {counter1, counter2, counter3}, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    });
  
    return (
    <>
        <h1>Counter1: {counter1}</h1>
        <h1>Counter2: {counter2}</h1>
        <h1>Counter3: {counter3}</h1>

        <hr/>

        <button type="button" className="btn btn-success" 
            onClick={ 
                () => setCounter({
                    counter1: counter1 + 1, // reemplaza counter1
                    counter2,counter3
                })
            }> +1 
        </button>
    </>
  )
}
