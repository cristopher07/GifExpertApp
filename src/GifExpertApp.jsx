import React from "react";
import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
import "./styles.css";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([]);

  const RemoveCategory = () => {
    setCategories([]);
  };

  const onAddCategory = (newCategory) => {
    if (
      categories.some(
        (category) => category.toLowerCase() === newCategory.toLowerCase()
      )
    ) {
      //some() verifica si el elemento ya existe en el arreglo
      return;
    }
    // if (categories.includes(category =>  category.toLowerCase() === newCategory.toLowerCase())) { //includes() verifica si el elemento ya existe en el arreglo
    setCategories([newCategory, ...categories]); //agregar una categoría en el estado
  };


  return (
    <>
    <div className="div1">
    <h1 >Gif Expert App</h1>
    </div>
      

      <AddCategory
        onNewCategory={(value) => onAddCategory(value)}
        // setCategories = {setCategories}
      />

    <div >
    {categories && categories.length > 0 ? (
        <button className="button" 
        onClick={RemoveCategory}>Eliminar todos los gifs</button>
      ) : null }
    
    {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </div>
  
    </>
  );
};
