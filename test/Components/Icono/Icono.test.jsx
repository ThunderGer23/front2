import { render, screen } from "@testing-library/react";
import { Icono } from "../../../src/Components/Icono/Icono";

describe('Pruebas en el componente Icono', () => { 
    const texto='Aten'
    const Direccion = '../../../public/img/mq16.png'

    test('Esta prueba es para hacer matchcon el snapshot', () => { 
        const {container} = render(<Icono texto={texto} Direccion={Direccion}/>)//Renderiza el componente Icono
        expect(container).toMatchSnapshot()//Toma una foto
     })

    test('Esta prueba valida que el componente p exista', () => { 
        render(<Icono texto={texto} Direccion={Direccion}/>)
        expect(screen.findByRole('p')).toBeTruthy()//Se verifica que exista el p
     })

    test('Esta prueba valida que el componente img exista y tenga la clase correcta', () => { 
        render(<Icono texto={texto} Direccion={Direccion}/>)
        expect(screen.findByRole('img')).toBeTruthy()
        const {className} = screen.getByRole('img')//Se salva la clase de la img del componente en className
        expect(className).toBe('logo')
     })
 })