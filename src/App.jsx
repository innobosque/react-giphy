import { useState } from "react";
import { AddGif, CategoriesGif } from "./components";


export const App = () => {
    const [categories, setCategories] = useState([]);

    const handleNewGif = value => {
        if (categories.includes(value)) return;
        setCategories(cat => ([value, ...cat]));
    }
    return (
        <>
            <header className={`p-4 bg-[url(./assets/bg-mobile-light.jpg)] bg-no-repeat bg-left-top bg-cover`}>
                <div className="flex justify-between">
                    <h1 className="uppercase text-white text-3xl font-bold space-x-7 tracking-wider">App Gifphy</h1>
                    <button className="bg-no-repeat bg-contain bg-[url(./assets/icon-moon.svg)]">&nbsp;&nbsp;&nbsp;&nbsp;</button>
                </div>
                <AddGif onNewGif={value => handleNewGif(value)} />
            </header>
            <CategoriesGif categories={categories} />
        </>
    );
}