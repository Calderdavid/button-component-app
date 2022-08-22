import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ButtonComponentApp } from './ButtonComponentApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ButtonComponentApp />
    </BrowserRouter>
  </React.StrictMode>
)
