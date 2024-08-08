import { renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";
import { act } from "react";


describe('Pruebas en useCounter', () => { 

    test('debe de retonar los valores por defecto', () => { 
        const { result } = renderHook( () => useCounter() );
        const { count, increment, decrement, reset } = result.current;
        
        expect( count ).toBe(1);
        expect( increment ).toEqual( expect.any( Function ) );
        expect( decrement ).toEqual( expect.any( Function ) );
        expect( reset ).toEqual( expect.any( Function ) );
    });

    test('debe de generar el counter con el valor de 100', () => {
        const newValue = 100;
        const { result } = renderHook( () => useCounter(newValue) );
        
        const {count} = result.current;
        expect( count ).toBe( newValue );
    })

    test('debe de incrementar el contador', () => { 
        const { result } = renderHook( () => useCounter() );
        const { increment } = result.current;

        act( () => increment() );

        expect( result.current.count ).toBe(2);
    })
    
    test('debe de decrementar el contador', () => { 
        const { result } = renderHook( () => useCounter(6) );
        const { decrement } = result.current;

        act( () => decrement() );

        expect( result.current.count ).toBe(5);
    })
    
    test('debe de resetear el contador', () => { 
        const { result } = renderHook( () => useCounter() );
        const { reset } = result.current;

        act( () => reset() );

        expect( result.current.count ).toBe(1);
    })


        

})

