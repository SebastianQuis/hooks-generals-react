import { render } from "@testing-library/react"
import { todoReducer } from "../../src/08-useReducer/todoReducer"

describe('Pruebas en TODOREDUCER', () => { 

    const initState = [
        {
            id: 1,
            todo: 'initial',
            done: false
        }
    ];

    test('debe de regresar el estado inicial', () => { 
        
        const newState = todoReducer(initState, {});
        // console.log(newState);
        expect( newState ).toBe(initState);
    })


    test('debe de agregar un TODO ', () => { 
        const action = {
            type: '[TODO] addTodo',
            payload: {
                id: 2,
                todo: 'initial 2',
                done: false
            }
        };
        const newState = todoReducer( initState, action );
        // console.log(newState);
        expect( newState ).toContain( action.payload );
    })
    
    test('debe de eliminar un TODO ', () => { 
        const action = {
            type: '[TODO] deleteTodo',
            payload: {
                id: 1,
            }
        }
        const newState = todoReducer( initState, action );
        expect( newState.length ).toBe( 0 );
    })

    test('debe de marcar en DONE un TODO ', () => { 
        const action = {
            type: '[TODO] doneTodo',
            payload: {
                id: 1
            }
        }

        // funcionamiento correcto de toggle.
        const newState = todoReducer( initState, action );
        expect( newState[0].done ).toBeTruthy();
        
        const newState2 = todoReducer( newState, action );
        expect( newState2[0].done ).toBe( false );
    })

})