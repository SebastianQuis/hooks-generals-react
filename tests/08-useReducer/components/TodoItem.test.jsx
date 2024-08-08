const { render, screen, fireEvent } = require("@testing-library/react");
const { TodoItem } = require("../../../src/08-useReducer/components/TodoItem");


describe('Pruebas en <TodoItem/>', () => { 

    const dataTodo = {
        id: 1,
        todo: 'mi todo',
        done: false
    }

    const onDeleteTodo = jest.fn();
    const onDoneTodo = jest.fn();

    beforeEach( () => jest.clearAllMocks() );

    test('debe de motrar el Todo Pendiente de completar', () => { 
        
        render( 
            <TodoItem 
                todo = { dataTodo } 
                onDeleteTodo = { onDeleteTodo }
                onDoneTodo = {onDoneTodo}/> 
        );

        const span = screen.getByRole( 'span' );
        // console.log(span.className);
        expect( span.className ).toContain( 'align-self-center' )
    })


    test('debe de llamar al onDeleteTodo', () => { 
        
        render( 
            <TodoItem 
                todo = { dataTodo } 
                onDeleteTodo = { onDeleteTodo }
                onDoneTodo = {onDoneTodo}/> 
        );

        const deleteButton = screen.getByRole( 'button' );
        fireEvent.click( deleteButton );

        expect( onDeleteTodo ).toHaveBeenCalledWith( dataTodo );
    });
    
    test('debe de llamar al onDoneTodo', () => { 
        render( 
            <TodoItem 
                todo = { dataTodo } 
                onDeleteTodo = { onDeleteTodo }
                onDoneTodo = {onDoneTodo}/> 
        );

        const buttonDone = screen.getByRole( 'li' );
        fireEvent.click( buttonDone );

        expect( onDoneTodo ).toHaveBeenCalled();
    });






})



