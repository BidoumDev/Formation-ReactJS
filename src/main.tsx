import React from 'react'                     // Moteur React
import ReactDOM from 'react-dom/client'       // Transposition React en DOM
import App from './components/App/App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(         //  ! = si il le trouve
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
