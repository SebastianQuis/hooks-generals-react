import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () => {
    // todo - funcion que retorna el valor inicial del componente en un useReducer
    return JSON.parse( localStorage.getItem('todos') ) || [];
}

export const useTodo = () => {
    const [todos, dispatch] = useReducer( todoReducer, [] , init) // [] - initState = []
    
    useEffect(() => {
      localStorage.setItem( 'todos', JSON.stringify( todos ) )
    }, [todos])
    
    
    const onNewTodo = ( todo ) => {
        const todoArr = JSON.parse( localStorage.getItem('todos') ) || [];
        const todoExists = todoArr.some( value =>  value.todo === todo.todo);

        if( !todoExists ) {
            const action = {
                type: '[TODO] addTodo',
                payload: todo
            };
            dispatch( action );
        } else {
            alert('El TODO ya existe.');
        }
            
    }

    const onDeleteTodo = ( todo ) => {
        const action = {
            type: '[TODO] deleteTodo',
            payload: todo
        }
        dispatch( action );
    } 

    const onDoneTodo = ( todo ) => {
        const action = {
            type: '[TODO] doneTodo',
            payload: todo
        }
        dispatch( action );
    }

    const allTodosCount = todos.length;

    const pendingTodosCount = todos.filter( todo => !todo.done ).length;
  
    return {
        todos,
        allTodosCount,
        pendingTodosCount,
        onNewTodo,
        onDeleteTodo,
        onDoneTodo
    }
}