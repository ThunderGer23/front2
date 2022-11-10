import { render, screen } from "@testing-library/react";
import { Link } from "../../../src/Components/Link/Link";

describe('Pruebas en el componente Link', () => { 
    const texto='y tu contraseña?'

    test('Esta prueba es para hacer match con el snapshot', () => { 
        const {container} = render(<Link texto={texto}/>)//Renderiza el componente Link
        expect(container).toMatchSnapshot()//Toma foto
     })

    test('Esta prueba valida que el div exista y pertenezca a la clase correcta', () => { 
        render(<Link texto={texto}/>)
        expect(screen.findByRole('div')).toBeTruthy()
        const {className} = screen.getByRole('div')//Se salva el tipo de la clase del div en className
        expect(className).toBe('text-center pt-1 mb-1')
      })
      
    test('Esta prueba valida que el p exista', () => { 
        render(<Link texto={texto}/>)
        expect(screen.findByRole('p'))
     })

     test('Esta prueba valida que el a exista', () => { 
        render(<Link texto={texto}/>)
        expect(screen.findByRole('a'))
     })
 })