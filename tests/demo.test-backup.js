import { sumar } from "./demo";

describe("Tests de la demo",()=>{
    test(
        'Test de la función suma',
        ()=>{
            let a=5,b=6;
            let total = sumar(a,b);
            //expect --> Received
            //toBe --> Expceted
            expect(a+b).toBe(total);
        }
    );
});