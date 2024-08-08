import { fireEvent, renderHook, screen } from "@testing-library/react"
import { useForm } from "../../src/hooks/useForm";
import { act } from "react";


describe('Pruebas en useForm', () => { 

    const newValue = {
        name: 'sebastian',
        email: 'sebastian@google.com' 
    }

    test('debe de regresar la info por defecto', () => { 
        const { result } = renderHook( () => useForm(newValue) );
        // console.log(result.current.formState);
        expect( result.current.formState ).toEqual( newValue );
    });

    test('debe de cambiar el nombre del form', () => { 
        const newValue2 = {
            name: 'rafael',
            email: 'rafael@google.com'
        }
        
        const { result } = renderHook( () => useForm(newValue) );
        const { onInputChange } = result.current;
       
        // const input = screen.getAllByRole( 'textbox' );
        
        act( () => 
            onInputChange(
                // { target: { name: 'name', value: newValue2.name }},
                { target: { name: 'email', value: newValue2.email }},
            )
        );

        
        // expect( result.current.name ).toBe( newValue2.name );
        // expect( result.current.formState.name ).toBe( newValue2.name );
        expect( result.current.email ).toBe( newValue2.email );
        expect( result.current.formState.email ).toBe( newValue2.email );
    });

    test('debe de regresar a un formulario vacio', () => {
        const { result } = renderHook( () => useForm() );
        const { onResetForm, onInputChange } = result.current;
       
        act( () => {
            onInputChange( { target: { name: 'email', value: 'rafael@gmail.com' }})
            onResetForm();
        });
        

        expect( result.current.email ).toEqual( undefined );
        // expect( result.current.email ).toBe( 'sebastian@google.com' );
        // expect( result.current.formState.email ).toBe( 'sebastian@google.com' );
    });

})