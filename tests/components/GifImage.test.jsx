import { render, screen } from '@testing-library/react';
import { GifImage } from '../../src/components/GifEndpoint/GifImage';

describe(
    'Componente <GifImage />',
    () => {

        const p_url = 'http://placekitten.com/200/300';
        const p_title = 'Texto alternativo';

        test(
            'Debe hacer match con el Snapshot',
            () => {
                const component = render(<GifImage url={p_url} title={p_title} />);
                //El container tiene como una captura
                const { container } = component;
                expect(container).toMatchSnapshot();
                //screen.debug();
            }
        );

        test(
            'Se debe mostrar la imagen con las etiquetas src y alt',
            () => {
                render(<GifImage url={p_url} title={p_title} />);
                screen.debug();
                const { alt, src } = screen.getByRole('img');
                expect(p_title).toBe(alt);
                expect(p_url).toBe(src);
            }
        )

    }
);