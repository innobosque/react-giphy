export const getFetchGifs = async category => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=3XzwNTiC6HvzURh2K7zynS8NNqJOpNUU&q=${category}&limit=5`;
    const response = await fetch(url);
    const {data} = await response.json();
    //console.log(data)
    return data.map(gif=>({id: gif.id,title: gif.title, url: gif.images.downsized_medium.url}));
}