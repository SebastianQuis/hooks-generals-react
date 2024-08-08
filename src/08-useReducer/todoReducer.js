

export const todoReducer = ( initialState = [], action ) => {

    switch ( action.type ) {
        case '[TODO] addTodo':
            return [ ...initialState, action.payload ]
            // throw new Error( 'Falta implementar addTodo' );
        
        case '[TODO] deleteTodo':
            return initialState.filter( state => state.id !== action.payload.id );
        
        case '[TODO] doneTodo':
            return initialState.map( state => {
                if (state.id === action.payload.id  ) {
                    return {
                        ...state,
                        done: !state.done
                    }
                }
                return state;
            });

        default:
            return initialState;
    }

}

