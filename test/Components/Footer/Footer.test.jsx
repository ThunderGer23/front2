import { render, screen } from "@testing-library/react";
import { Footer } from "../../../src/Components/Footer/Footer";

describe('Pruebas en el componente Footer', () => { 
    test('Esta prueba es para hacer match con el snapshot', () => { 
        const {container} = render(<Footer/>)//Renderiza el componente Footer
        expect(container).toMatchSnapshot();//Toma una foto
     })

    test('Esta prueba valida que el div exista y pertenezca a la clase correcta', () => { 
        render(<Footer/>)//Renderiza el componente Footer
        expect(screen.findAllByRole('div')).toBeTruthy()//Se valida que exista el div
        const {className} = screen.getByRole('div')//Se salva la clase del div del componente en className
        expect(className).toBe('d-flex align-items-end justify-content-end pe-4')
     })
 })