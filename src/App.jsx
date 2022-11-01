import { useState } from "react";
import { GifSearch, GifMapSearch } from "./components";


export const App = () => {
    const [data, setData] = useState([]);

    const handleNewGif = value => {
        if (!!data.find(item=>item.category.toLowerCase().includes(value.category.toLowerCase()))) return;
        setData(oldValues => ([value, ...oldValues]));
    }
    return (
        <>
            <header className={`p-4 bg-blue-400 bg-[url('./assets/bg-mobile-light.jpg')] bg-no-repeat bg-left-top bg-cover`}>
                <div className="flex justify-between">
                    <h1 className="uppercase text-white  font-bold space-x-7 tracking-wider">App Gifphy</h1>
                </div>
                {/* Control de formulario de tipo search. Obtenemos la nueva categoría buscada  */}
                <GifSearch onNewGif={newValue => handleNewGif(newValue)} />
            </header>
            {/* Listado de datos */}
            <GifMapSearch searches={data} />
        </>
    );
}