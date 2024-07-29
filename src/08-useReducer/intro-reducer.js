
const initialState = [
    {
        id: 1,
        todo: 'limpiar oficina',
        done: false
    },
]


const todoReducer = ( state = initialState, action ) => {

    // action es para cambiar el state y enviar un nuevo estado
    if( action.type === '[TODO] add todo' ) {
        return [ ...state, action.payload];
    }
    
    if( action.type === '[TODO] delete todo' ) {
        return state.filter( state =>  state.id !== action.payload );
    }
    return state;
}


const data = {
    id: 2,
    todo: 'limpiar cuarto',
    done: false
};

const actionAddTodo = {
    type: '[TODO] add todo',
    payload: data
}

const id = 1;

const actionRemoveTodo = {
    type: '[TODO] delete todo',
    payload: id
}

let todos = todoReducer( initialState, actionAddTodo )
let todosDeleted = todoReducer( initialState, actionRemoveTodo )

console.log(todos);
console.log(todosDeleted);