import { render, screen } from "@testing-library/react";
import { Formulario } from "../../../src/Components/Formulario/Formulario";

describe('Pruebas en el componente Formulario', () => { 
    test('Esta prueba es para hacer match con el snapshot', () => { 
        const {container} = render(<Formulario/>)//Renderiza el componente Formulario
        expect(container).toMatchSnapshot()//Toma una foto
     })

    test('Esta prueba valida que el div exista', () => { 
        render(<Formulario/>)
        expect(screen.findAllByRole('div')).toBeTruthy()//Se calida que exista el div
     })

    test('Esta prueba valida que el form exista y pertenezca a la clase correcta', () => { 
        render(<Formulario/>)
        expect(screen.findByRole('form')).toBeTruthy()
        const {className} = screen.getByRole('form')//Se salva la clase del div del componente en className
        expect(className).toBe('bt-4')
     })
})