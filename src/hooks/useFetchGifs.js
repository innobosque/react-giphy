import { useEffect, useState, useCallback } from "react";
import { getFetchGifs } from "../helpers/getFetchGifs";

export const useFetchGifs = category => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error,setError] = useState({code:'',error:''});

    const getGifs = useCallback (async () => {
        try {
            setIsLoading(true);
            const gifs = await getFetchGifs(category);
            setImages(gifs)

        } catch (err) {
            setError(err);
        } finally {
            setIsLoading(false);
        }
    },[]);

    useEffect(() => {
        getGifs();
    }, []);
    
    return {
        isLoading,
        images,
        error,
    }
}