import { useEffect, useState } from "react";
import { getFetchGifs } from "../helpers/getFetchGifs";

export const useFetchGifs = category => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    const getGifs = async () => {
        try {
            setIsLoading(true);
            const gifs = await getFetchGifs(category);
            //console.table(gifs)
            setImages(gifs)

        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getGifs();
    }, []);
    
    return {
        isLoading,
        images
    }
}