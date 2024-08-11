import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { MainApp } from "../../src/09-context/MainApp";

describe('Pruebas en <MainApp/>', () => { 

    test('debe de mostrar el texto HomePage', () => { 
        render(
            // MEMORY ROUTER: usar cuando el comp a evaluar tiene un provider por encima
            <MemoryRouter>  
                <MainApp/>
            </MemoryRouter>
        );
        expect( screen.getByText('Home page') ).toBeTruthy();
    })
    
    test('debe de mostrar el LoginPage', () => { 
        render(
            // MEMORY ROUTER: usar cuando el comp a evaluar tiene un provider por encima
            // <MemoryRouter initialEntries={ ['/login'] } > // PARA QUE EMPIECE POR LA RUTA LOGIN
            <MemoryRouter>
                <MainApp/>
            </MemoryRouter>
        );
        const loginButton = screen.getByText( 'Login' );
        fireEvent.click( loginButton );
        expect( screen.getByText('LoginPage') ).toBeTruthy();
        expect( loginButton.className ).toContain('active');
    
    })



})