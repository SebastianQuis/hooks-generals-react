import React, { useEffect, useRef, useState } from 'react'
import { useForm } from '../../hooks/useForm';

export const AddTodoForm = ( {onNewTodo} ) => {

  const inputRef = useRef('');
  const setFocus = () => {
    inputRef.current.select();
  }

 
  const { description, formState, onInputChange, onResetForm } = useForm({
    description: ''
  });

  const onFormSubmit = (event) => {
    event.preventDefault();
    
    if( description.length <= 1 ) return;
    const newTodo = {
      id: new Date().getTime(),
      todo: description,
      done: false
    }
    onNewTodo( newTodo );
    onResetForm();
  }


  return (
    <form onSubmit={ onFormSubmit } >
      <input
        ref={ inputRef }
        type='text'
        placeholder='Agregar nueva tarea'
        className='form-control'
        name= 'description'
        value={ description }
        onChange={onInputChange}
      />

      <button
        type='submit'
        className='btn btn-outline-success mt-2'
        onClick={ () => setFocus() }
        onChange={ onInputChange }
      >
        Agregar
      </button>

    </form>
  )
}
