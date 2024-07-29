

export const todoReducer = ( initialState, action ) => {

    switch ( action.type ) {
        case '[TODO] addTodo':
            return [ ...initialState, action.payload ]
            // throw new Error( 'Falta implementar addTodo' );
        
        case '[TODO] deleteTodo':
            return initialState.filter( state => state !== action.payload );
        
        case '[TODO] doneTodo':
            return initialState.map( state => {
                if (state === action.payload  ) {
                    return {
                        ...state,
                        done: !state.done
                    }
                }
                return state;
            });

        default:
            break;
    }

}

