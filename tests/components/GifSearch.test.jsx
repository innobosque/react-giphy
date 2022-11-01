import { fireEvent, render, screen } from "@testing-library/react";
import { GifSearch } from "../../src/components/GifSearch";

describe('Componente GitImage', () => {
    test('Hacer un match a un snapshot', () => {
        const { container } = render(<GifSearch onNewGif={() => { }} />);
        expect(container).toMatchSnapshot();
    });

    test('Cambiar el valor de la caja de texto', () => {

        const inputValue = 'Xurxo';

        render(<GifSearch onNewGif={() => { }} />);
        const input = screen.getByRole('searchbox');

        //disparemos un evento
        fireEvent.input(
            input,
            {
                target: { value: inputValue }
            });

        //Comprobamos si la caja de text recibe un valor antes del envío   
        expect(input.value).toBe(inputValue);
        //screen.debug();

    });

    test('Se debe llamar a la función onNewGif si el input tiene un valor', () => {
        const onNewGifFn = jest.fn();
        const valor = 'Xurxo';

        render(<GifSearch onNewGif={onNewGifFn} />);

        //
        const myInput = screen.getByRole('searchbox');

        //Disparemos el formulario para que se llame a la función
        const form = screen.getByRole("form");//Para seleccionar el elemento debe tener el atributo aria-label="form"

        //Pasamos el valor
        fireEvent.input(
            myInput,
            {
                target:{value: valor}
            }
        )
        screen.debug()

        fireEvent.submit(form);

        expect(myInput.value).toBe('');
        expect(onNewGifFn).toHaveBeenCalled();
        expect(onNewGifFn).toHaveBeenCalledWith({
            "category": valor,
            "id": expect.any(Number)
        });
    });


    test("No se debe de llamar al formulario si el input se encuentra vacío",()=>{
        const onNewGif = jest.fn();

        render(<GifSearch onNewGif={onNewGif} />)
        
        const form = screen.getByRole('form');
        fireEvent.submit(form);

        expect(onNewGif).toHaveBeenCalledTimes(0);
        expect(onNewGif).not.toHaveBeenCalled();
    })
});