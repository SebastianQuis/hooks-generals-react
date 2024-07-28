import React, { useRef } from 'react'

export const FocusScreen = () => {
    const inputRef = useRef('');

    const setFocus = () => {
        // document.querySelector('input').select();
        // document.querySelector('input').focus();

        inputRef.current.select() // por useRef
    }
  
    return (
        <>
            <h1>Focus Screen</h1>
            <hr />

            <input 
                ref={ inputRef }
                type="text"
                className='form-control'
                placeholder='Ingrese su nombre'
                name='name' 
            />


            <button
                className='btn btn-primary mt-2'
                onClick={ () => setFocus() }
            >
                Set focus
            </button>
        
        </>
    )
}
