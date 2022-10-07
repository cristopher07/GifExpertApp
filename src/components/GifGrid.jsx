import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import "../styles.css";

export const GifGrid = ({ category }) => {
   const {images, loading} = useFetchGifs(category); //llamamos el customhook

  return (
    <>
      <br />
      <div className="div2">
            {images && images.length > 0 
              ? (<h3>Los mejores Gisf de: {category}</h3>)
              : null}
              {loading ? (<h2>Cargando...</h2>) : null}
      </div> 

      <div className="card-grid">
        {/* 
        {
          images.map( ({id,title}) => { //se desestructura el objeto sino fuera img, y dentro del li se pone img.title y img.id
            return (
              <GifItem/>
            )
          })
        } */}

        {images.map((img) => {
          return (
            <GifItem
              key={img.id}
              {...img} //se envía el objeto completo y se reciben todas sus propiedades
            />
          );
        })}
      </div>
    </>
  );
};
