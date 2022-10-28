import { fireEvent, render, screen } from "@testing-library/react";
import { GifSearch } from "../../src/components/GifSearch";

describe('Componente GitImage',()=>{
    test('Hacer un match a un snapshot',()=>{
        const {container} = render(<GifSearch onNewGif={()=>{}} />);
        expect(container).toMatchSnapshot();
    });

    test('Cambiar el valor de la caja de texto',()=>{
        render(<GifSearch onNewGif={()=>{}} />);
        const input = screen.getByRole('searchbox');
        //disparemos un evento
        fireEvent.input(
            input,
            {
                target: {value:'Xurxo'}
            });
        expect(input.value).toBe('Xurxo');
            
        //screen.debug();
    });
});