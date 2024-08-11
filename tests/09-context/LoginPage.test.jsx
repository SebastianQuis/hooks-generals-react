import { fireEvent, render, screen } from "@testing-library/react"
import { LoginPage } from "../../src/09-context/LoginPage";
import { UserContext } from "../../src/09-context/context/UserContext";

describe('Pruebas en <LoginPage/>', () => { 

    test('debe de mostrar el componente sin el usuario', () => { 
        
        render( 
            <UserContext.Provider value={ {user: null, setUser: null } }>
                <LoginPage/> 
            </UserContext.Provider>
        )
        
        expect( screen.getByRole('code').innerHTML ).toContain( 'null' );

    })

    test('debe de ejecutar la función del setUser', () => { 
        const setUser = jest.fn();
        
        render( 
            <UserContext.Provider value={ {user: null, setUser: setUser} }>
                <LoginPage/> 
            </UserContext.Provider>
        )

        const buttonUser = screen.getByRole('button');
        fireEvent.click(buttonUser);

        // screen.debug();
        expect( setUser ).toHaveBeenCalledTimes(1);
        expect( setUser ).toHaveBeenCalledWith({
            id: 123,
            name: 'sebastian',
            correo: 'sebastian@google.com'
        });
    })

})