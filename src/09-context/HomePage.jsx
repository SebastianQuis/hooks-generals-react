import React, { useContext, useState } from 'react';
import { UserContext } from './context/UserContext';


export const HomePage = () => {

  // const {correo, id, name} = useContext( UserContext );
  const { user, setUser } = useContext( UserContext );

  // console.log(algo);

  return (
    <>
        <h1>Home page</h1>
        <hr />
        {/* <code>
          {
            JSON.stringify( user )
          }
        </code> */}
        {
          (user) && 
            (
              <div role='cardUser' className="card" style={{ width:"18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">{ user?.name }</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">{ user?.id }</h6>
                  <p className="card-text">{user?.correo}</p>
                </div>
              </div>
            )
        }
        
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
