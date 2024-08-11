import { render, screen } from "@testing-library/react"
import { HomePage } from "../../src/09-context/HomePage"
import { UserContext } from "../../src/09-context/context/UserContext"

describe('Pruebas en <HomePage>', () => { 

    test('debe de mostrar el componente con el botón agregar usuario', () => { 
        render( 
            <UserContext.Provider value={ {user: null, setUser: null} }>
                <HomePage/> 
            </UserContext.Provider>
        )
        screen.debug();
        expect( screen.getByRole('button').innerHTML ).toBe( 'Agregar usuario');
    });
    
    test('debe de mostrar el componente con el usuario', () => { 
        const user =  {
            id: 123,
            name: 'sebastian',
            correo: 'sebastian@google.com'
          }
        
        render( 
            <UserContext.Provider value={ {user, setUser: null} }>
                <HomePage/> 
            </UserContext.Provider>
        )
        screen.debug();
        expect(screen.getByText(user.name).innerHTML).toBe( 'sebastian' );;
    });

})