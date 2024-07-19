
import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {
    
    const [simpleForm, setSimpleForm] = useState({
        username: 'Sebastian',
        email: 'sebastian@gmail.com',
    })

    const { username, email } = simpleForm;
    
    const onInputChange = (event) => { 
        const {target} = event;
        const {name, value} = target; // "name" reference of input

        setSimpleForm({
            ...simpleForm,
            [name]: value 
        });
    }

    useEffect(() => {
        onInputChange
    }, [simpleForm])


    return (
        <>
            <h1>SimpleForm</h1>

            <hr />

            <input 
                type="text"
                className='form-control'
                placeholder='username'
                name='username'
                value={ username }
                onChange={ onInputChange }
            />

            <input 
                type="email"
                className='form-control mt-2'
                placeholder='email'
                name='email'
                value={ email }
                onChange={ onInputChange }
            />

            { ( username === 'Sebastian2' ) && <Message />  }

        </>
    )
}

