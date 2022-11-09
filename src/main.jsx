import React from 'react'
import ReactDOM from 'react-dom/client'
import { Boton } from './Components/Boton'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Boton texto='Hola mundo'/>
  </React.StrictMode>
)
