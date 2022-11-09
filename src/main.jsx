import React from 'react'
import ReactDOM from 'react-dom/client'
import { Avatar } from './Components/Avatar/Avatar'
import { Boton } from './Components/Boton/Boton'
import { Formulario } from './Components/Formulario/Formulario'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Boton texto='Hola mundo'/>
    <Avatar Direccion='../public/img/mq20.png'/>
    <Formulario/>
  </React.StrictMode>
)
Formulario