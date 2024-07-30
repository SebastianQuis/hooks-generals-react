
import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ( {todos = [], onDeleteTodo, onDoneTodo} ) => {

    const todosSorted = [ ...todos ].sort( (a,b) => a.done - b.done )
    
    return (
        <ul className='list-group' > 
        {
            todosSorted.map( todo =>  (
                <TodoItem 
                    key          = { todo.id } 
                    todo         = { todo }
                    onDeleteTodo = { onDeleteTodo }
                    onDoneTodo   = { onDoneTodo } 
                />
            ))
         }
        </ul>
    )
}



