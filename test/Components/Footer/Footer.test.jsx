import { render, screen } from "@testing-library/react";
import { Footer } from "../../../src/Components/Footer/Footer";

describe('Pruebas en el componente Footer', () => { 
    test('Esta prueba es para hacer match con el snapshot', () => { 
        const {container} = render(<Footer/>)//Renderiza el componente Footer
        expect(container).toMatchSnapshot();//Toma una foto
     })
 })