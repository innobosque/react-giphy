import { useEffect, useState } from "react";
import { getFetchGifs } from "../helpers/getFetchGifs";

export const useFetchGifs = category => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error,setError] = useState({code:'',error:''});

    const getGifs = async () => {
        try {
            setIsLoading(true);
            const gifs = await getFetchGifs(category);
            //console.table(gifs)
            setImages(gifs)

        } catch (err) {
            setError(err);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getGifs();
    }, []);
    
    return {
        isLoading,
        images,
        error,
    }
}