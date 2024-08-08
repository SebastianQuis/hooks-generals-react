import React, { useState } from 'react'
import { UserContext } from './UserContext'

export const UserProvider = ( {children} ) => {

  const [user, setUser] = useState();

  return (
    <UserContext.Provider value={ { user, setUser } } >
      { children }
    </UserContext.Provider>
  ) 
}



// <UserContext.Provider value={ { user } }>

// const userData = {
//     id: 123,
//     name: 'sebastian',
//     correo: 'sebastian@google.com'
// }
