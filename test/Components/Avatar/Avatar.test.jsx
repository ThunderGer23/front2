import { render, screen } from "@testing-library/react";
import { Avatar } from "../../../src/Components/Avatar/Avatar";

describe('Pruebas en el componente Avatar', () => { 
const Direccion='../../../public/img/mq16.png'

    test('Esta prueba es para hacer match con el snapshot', () => { 
        const {container} = render(<Avatar Direccion={Direccion} />)//Renderiza el componente
        expect(container).toMatchSnapshot();//Toma una foto
     })

    test('Esta prueba valida que la etiqueta li exista y pertenezca a la clase correcta', () => {
        render(<Avatar Direccion={Direccion} />)
        expect(screen.getByRole('li')).toBeTruthy()//Se valida que exista la etiqueta li
    })

    test('Esta prueba valida que la etiqueta img exista y pertenezca a la clase correcta', () => { 
        render(<Avatar Direccion={Direccion} />)
        expect(screen.getByRole('img')).toBeTruthy()//Se valida que exista la etiqueta img
        const{className} =screen.getByRole('img')//Se salva la clase del img del componente className
        expect(className).toBe('img-fluid')//Se valida que el img tenga la misma clase que className
    })
 })