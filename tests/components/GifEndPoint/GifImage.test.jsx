import { render, screen } from "@testing-library/react";
import { GifImage } from "../../../src/components/GifEndpoint/GifImage";

describe('Componente GifImage',()=>{
    const url = "https://dir.com/";
    const title ="Molo";

    test('El componente debe recibir un argumento String para su propiedad src',()=>{
        render(<GifImage src={url} />)
    })
    
    test('Validamos que el componente recibir argumentos para sus alt,src y debidamente tipados',()=>{
        render(<GifImage src={url} alt={title} />);
        const {alt,src} = screen.getByRole('img');
        expect(alt).toBe(title);
        expect(alt).toEqual(expect.any(String));
        expect(src).toBe(url);
        expect(src).toEqual(expect.any(String));  
        
    })

});