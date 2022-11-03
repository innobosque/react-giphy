import { render,screen } from "@testing-library/react";
import { GifMapSearch } from "../../../src/components/GifEndpoint/GifMapSearch";

describe("Testeo del componente GifMapSearch antes de recibir algo",()=>{
    const data = [{id:1,category:'prueba'},{id:2,category: 'prueba2'}];
    test("",()=>{
        const {container} = render(<GifMapSearch />);
        const h2 = container.querySelector('h2');
        expect(h2.innerHTML).toContain('Busquemos');
    });

    test("Listamos los datos que nos llegan como props en el componente", ()=>{
        const {container} = render(<GifMapSearch  searches={data}/>)
        const h3 = container.querySelectorAll('h3');
        expect(h3.length).toBeGreaterThan(0);
        expect(h3[0].innerHTML).toContain(data[0].category);
    });
});