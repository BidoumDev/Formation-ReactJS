import React from 'react'                     // Moteur React
import ReactDOM from 'react-dom/client'       // Transposition React en DOM
import App from './components/App/App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/store.js'

//ReactDOM.createRoot(document.getElementById('root')!).render(         //  ! = si il le trouve
ReactDOM.createRoot(document.getElementById('root')).render( 
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
