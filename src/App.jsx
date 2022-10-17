import { useState } from "react";
import { GifSearch, GifMapSearch } from "./components";


export const App = () => {
    const [categories, setCategories] = useState([]);

    const handleNewGif = value => {
        if (categories.includes(value)) return;
        setCategories(cat => ([value, ...cat]));
    }
    return (
        <>
            <header className={`p-4 bg-blue-400 bg-[url('./assets/bg-mobile-light.jpg')] bg-no-repeat bg-left-top bg-cover`}>
                <div className="flex justify-between">
                    <h1 className="uppercase text-white  font-bold space-x-7 tracking-wider">App Gifphy</h1>
                    <button className="w-4 h-4 bg-no-repeat bg-contain bg-[url('./assets/icon-moon.svg')] text-[0]">Modo Oscuro</button>
                </div>

                <GifSearch onNewGif={value => handleNewGif(value)} />
            </header>

            <GifMapSearch categories={categories} />
        </>
    );
}