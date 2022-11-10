import { render, screen } from "@testing-library/react";
import { Input } from "../../../src/Components/Input/Input";

describe('Pruebas en el componente Input', () => { 
    const Tipo='email'
    const Holder='email:'

    test('Esta prueba es para hacer match con el snapshot', () => { 
        const {container} = render(<Input Tipo={Tipo} Holder={Holder}/>)//Renderiza el conponente Input
        expect(container).toMatchSnapshot()//Toma una foto
     })

    test('Esta prueba valida que el div exista y pertenezca a la clase correcta', () => { 
        render(<Input Tipo={Tipo} Holder={Holder}/>)
        expect(screen.findByRole('div')).toBeTruthy()
        const {className} = screen.getByRole('div')//Se salva el tipo de la clase del div en className
        expect(className).toBe('input-group mb-4')
     })

    test('Esta prueba valida que el span exista y pertenezca a la clase correcta', () => { 
        render(<Input Tipo={Tipo} Holder={Holder}/>)
        expect(screen.findByRole('span')).toBeTruthy()
        const {className} = screen.getByRole('span')//Se salva el tipo de clase del span en className
        expect(className).toBe('input-group-text')
     })

    test('Esta prueba valida que el i exista y pertenezca a la clase correcta', () => { 
        render(<Input Tipo={Tipo} Holder={Holder}/>)
        expect(screen.findByRole('i')).toBeTruthy()
        const {className} = screen.getByRole('i')
        expect(className).toBe('fa-regular fa-user')
     })

    test('Esta prueba valida que el input exista y pertenezca a la clase correcta', () => { 
        render(<Input Tipo={Tipo} Holder={Holder}/>)
        expect(screen.findByRole('input')).toBeTruthy()
        const {className} = screen.getByRole('input')
        expect(className).toBe('form-control')
     })
 })