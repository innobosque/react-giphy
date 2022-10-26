import { getFetchGifs } from "../../src/helpers/getFetchGifs";

describe(
    'Prueba sobre el helper GetFetchGifs',
    () => {

        test(
            'Comprobar que la función devuelve un array',
            async () => {
                const gifs = await getFetchGifs('One puch');
                //console.log(gifs)
                expect(gifs.length).toBeGreaterThanOrEqual(0);

                expect(gifs[0]).toEqual({
                    id: expect.any(String),
                    title: expect.any(String),
                    url: expect.any(String)
                })
            }

        );
    }

);