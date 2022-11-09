import {render, screen} from "@testing-library/react"
import { Boton } from "../../../src/Components/Boton/Boton"

describe('Pruebas en el Boton',()=>{
    const texto= 'Boton'

    test('Esta prueba es para hacer match con el snapshot',() =>{
        const {container} = render(<Boton texto={texto}/>)//Renderiza el componente
        expect(container).toMatchSnapshot();//Toma una "foto"
    })

    test('Esta prueba valida que el div exista y pertenezca a la clase correcta',() =>{
        render(<Boton texto={texto}/>)
        expect(screen.getByRole('div')).toBeTruthy()//Se valida que exista el div
        const {className}= screen.getByRole('div')//Se salva la clase del div del componente en className        
        expect(className).toBe('d-grid gap-2 mb-4')//Se valida que el div tenga la misma clase que className
    })

    test('Esta prueba valida que el button exista y pertenezca a la clase correcta', () =>{
        render(<Boton texto={texto}/>)
        expect(screen.getByRole('button')).toBeTruthy()
        const{className}=screen.getByRole('button')
        expect(className).toBe('btn btn-light')
    })

    test('Esta prueba valida que la etiqueta i exista y pertenezca a la clase correcta',() =>{
        render(<Boton texto={texto}/>)
        expect(screen.getByRole('i')).toBeTruthy()//Se valida que exista la eiqueta i
        const{className}=screen.getByRole('i')
        expect(className).toBe('fa fa-right-to-bracket orange')
    })
    
})