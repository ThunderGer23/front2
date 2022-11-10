import { render, screen } from "@testing-library/react";
import { Logo } from "../../../src/Components/Logo/Logo";

describe('Prueba en el componente Logo', () => { 
    const Direccion='../../../public/img/mq16.png'

    test('Esta prueba es para hacer match con el snapshot', () => { 
        const {container} = render(<Logo Direccion={Direccion}/>)//Renderiza el componente Link
        expect(container).toMatchSnapshot()//Toma foto
     })

    test('Esta prueba valida que el div exista y pertenezca a la clase correcta', () => { 
        render(<Logo Direccion={Direccion}/>)
        expect(screen.findByRole('div')).toBeTruthy()
        const {className} = screen.getByRole('div')//Se salva el tipo de la clase del div en className
        expect(className).toBe('text-center mb-5') 
     })

    test('Esta prueba valida que img exista y pertenezca a la clase correcta', () => { 
        render(<Logo Direccion={Direccion}/>)
        expect(screen.findByRole('img')).toBeTruthy()
        const {className} = screen.getByRole('img')
        expect(className).toBe('logo')
     })
 })