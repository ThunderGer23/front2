import { render, screen } from "@testing-library/react";
import { Card } from "../../../src/Components/Card/Card";

describe('Pruebas en el componente Card', () => { 
    const titulo = 'Titulo Card'
    const texto = 'Texto del Card'

    test('Esta prueba es para hacer match con el snapshot', () => { 
        const {container} = render(<Card titulo={titulo} texto={texto}/>)//Renderiza el componente Card
        expect(container).toMatchSnapshot();//Toma una foto
     })

    test('Esta prueba valida que el div exista y pertenezca a la clase correcta', () => { 
        render(<Card titulo={titulo} texto={texto}/>)
        expect(screen.getByRole('div')).toBeTruthy()//Se valida que exista el div
        const {className} = screen.getByRole('div')//Se salva la clase del div del componente en className
        expect(className).toBe('card-body')//Se valida que el div tenga la misma clase que className
     })

    test('Esta prueba valida que la etiqueta h3 exista', () => { 
        render(<Card titulo={titulo} texto={texto}/>)
        expect(screen.getByRole('h3')).toBeTruthy()
     })

    test('Esta prueba valida que la etiqueta p exista', () => { 
        render(<Card titulo={titulo} texto={texto}/>)
        expect(screen.getByRole('p')).toBeTruthy()
     })
 })