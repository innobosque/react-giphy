import { useState } from "react";
import {AddGif,CategoriesGif} from "./components";

export const App = () => {
    const [categories, setCategories] = useState([]);

    const handleNewGif = value => {
        if(categories.includes(value)) return;
        setCategories(cat=>([value,...cat]));
    }
    return (
        <>
            <h1>App</h1>
            <AddGif onNewGif={value => handleNewGif(value)}/>
            <CategoriesGif categories={categories} />
        </>
    );
}