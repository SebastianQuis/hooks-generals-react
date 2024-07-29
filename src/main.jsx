import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

// import { Memorize } from './06-memos/Memorize.jsx'
// import { MemorizeHook } from './06-memos/MemorizeHook.jsx'
// import { CallBackHook } from './06-memos/CallBackHook.jsx'


import { TodoApp } from './08-useReducer/TodoApp.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <TodoApp />
  // </React.StrictMode>,
)
