import { render, screen } from "@testing-library/react";
import { useTodo } from "../../src/hooks/useTodo"
import { TodoApp } from "../../src/08-useReducer/TodoApp";

jest.mock('../../src/hooks/useTodo');

describe('Pruebas en <TodoApp/>', () => { 

    useTodo.mockReturnValue( // enviar las propiedades que tiene el TODOAPP
        {
            todos: [
                { id: 1, todo: 'todo #1', done: false },
                { id: 2, todo: 'todo #2', done: true },
            ],
            allTodosCount: 2,
            pendingTodosCount: 1,
            onNewTodo: jest.fn(),
            onDeleteTodo: jest.fn(),
            onDoneTodo: jest.fn(),
        }
    );
    
    
    test('debe de renderizar el TodoApp', () => {       
        render( <TodoApp/> )

        expect( screen.getByText('todo #1') ).toBeTruthy();
        expect( screen.getByText('todo #2') ).toBeTruthy();
        expect( screen.getByText('Agregar') ).toBeTruthy();
        expect( screen.getByRole('textbox') ).toBeTruthy();
        expect( screen.getByRole('h4').innerHTML ).toContain( '2' );
    });
   
})
