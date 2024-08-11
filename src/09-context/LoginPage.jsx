import React, { useContext } from 'react'
import { UserContext } from './context/UserContext'

export const LoginPage = () => {

    const { user, setUser } = useContext( UserContext )

    return (
        <>
            <h1>LoginPage</h1>
            <hr />
            <code role='code'>
                {
                    JSON.stringify(user)
                }
            </code>
            {/* {
                (user) && 
                    (
                    <div className="card" style={{ width:"18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">{ user?.name }</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary">{ user?.id }</h6>
                            <p className="card-text">{user?.correo}</p>
                        </div>
                    </div>
                    )
            } */}

            <button 
                className='btn btn-primary mt-3'
                onClick={ () => setUser( 
                    {
                        id: 123,
                        name: 'sebastian',
                        correo: 'sebastian@google.com'
                    }
                ) }
                >
                Agregar usuario
            </button>
        </>  
    )
}
