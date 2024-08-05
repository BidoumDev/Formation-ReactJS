import React from 'react'                     // Moteur React
import ReactDOM from 'react-dom/client'       // Transposition React en DOM
import App from './components/App/App.jsx'
import './index.css'

//ReactDOM.createRoot(document.getElementById('root')!).render(         //  ! = si il le trouve
ReactDOM.createRoot(document.getElementById('root')).render( 
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
