import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import { BrowserRouter } from "react-router-dom";

// import { Memorize } from './06-memos/Memorize.jsx'
// import { MemorizeHook } from './06-memos/MemorizeHook.jsx'
// import { CallBackHook } from './06-memos/CallBackHook.jsx'


import { TodoApp } from './08-useReducer/TodoApp.jsx'
import { MainApp } from './09-context/MainApp.jsx'
import { CustomPokemonHook } from './03-pokemon/CustomPokemonHook.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* // <React.StrictMode> */}
      <MainApp />
      {/* <CustomPokemonHook /> */}
    {/* // </React.StrictMode>, */}
  </BrowserRouter>
)
