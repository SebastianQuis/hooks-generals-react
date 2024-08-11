import React from 'react'

import { UserProvider } from './context/UserProvider'

import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from './HomePage'
import { LoginPage } from './LoginPage'
import { AboutPage } from './AboutPage'
import { Page404 } from './Page404'
import { NavBar } from './components/NavBar'

// import '../index.css';

export const MainApp = () => {
  return (
    <UserProvider>
      <h1>Use Context</h1>
      
      <NavBar/>

      <hr />

      <Routes>
        <Route path='/'        element={ <HomePage/> }  />
        <Route path='login'    element={ <LoginPage/> } />
        <Route path='about'    element={ <AboutPage/> } />
        <Route path='notFound' element={ <Page404/> } />
      
        {/* TODO - PAGINA 404 */}
        {/* <Route path='/*' element={ <Page404/> } /> */}
        <Route path='/*' element={ <Navigate to="/notFound"/> } />
        
      </Routes>
      
    </UserProvider>
  )
}