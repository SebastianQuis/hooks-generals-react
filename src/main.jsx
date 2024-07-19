import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

// import { HooksApp } from './HooksApp.jsx'
// import { CounterApp } from './useState/CounterApp.jsx'
// import { CounterCustomHook } from './hooks/CounterCustomHook.jsx'
// import { SimpleForm } from './02-useEffect/SimpleForm.jsx'

import { CustomPokemonHook } from './03-pokemon/CustomPokemonHook.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <CustomPokemonHook />
  // </React.StrictMode>,
)
