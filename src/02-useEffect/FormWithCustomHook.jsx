import { useEffect, useState } from "react";
// import { useForm } from "../hooks/useForm";


export const FormWithCustomHook = () => {

    
    // const { formState, onInputChange, onResetForm } = useForm({
    //     username: '',
    //     email: '',
    //     password: ''
    // });

    const { username,email,password } = formState;

    
    useEffect(() => {
        onInputChange
    }, [formState])


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
            
            <input 
                type="password"
                className='form-control mt-2'
                placeholder='password'
                name='password'
                value={ password }
                onChange={ onInputChange }
            />

            <button onClick={ onResetForm } className="btn btn-primary mt-4" >Reset</button>

        </>
    )
}

