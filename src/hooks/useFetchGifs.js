import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category) => {

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

    const getImages = async () => {
      const newImages = await getGifs(category);
      setImages(newImages);
      setLoading(false);
    }


    useEffect ( ()=>{
       getImages()
    },[]);//el segundo argumento es un arreglo de dependencias, si se deja vacío solo se ejecuta una vez

  return {
    images,
    loading
  }
}
