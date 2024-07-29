import React from 'react'

export const TodoItem = ( { todo, onDeleteTodo, onDoneTodo  } ) => {
  
    return (
        <li
            className='list-group-item d-flex justify-content-between'
            onClick={ ( value ) => onDoneTodo( todo ) }
        >
            <span 
                className={
                    `align-self-center 
                    ${ todo.done ? 'text-decoration-line-through' : '' }`
                }
            >
                { todo.todo }
            </span>

            <button 
                className='btn btn-outline-danger'
                onClick={ () => onDeleteTodo( todo ) }
            >
                Borrar
            </button>
            {/* <input
                type='checkbox'
                className='form-check'
                checked={todo.done ? true : false}
                onChange={ (value) => { console.log( value ) } }
            ></input> */}
        </li>
    )
}
