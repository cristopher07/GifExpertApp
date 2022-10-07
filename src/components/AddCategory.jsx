import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {

  const [inputValue, SetinputValue] = useState("");

  const onInputChange = ({ target }) => {
    SetinputValue(target.value);
  };

  const onSubmit = (event) =>{
    event.preventDefault();
    
    if(inputValue.trim().length <= 1){ //trim() elimina los espacios en blanco, en este caso no permite que se agregue espacios en blanco
        return;
    }
    onNewCategory(inputValue.trim());
    SetinputValue("");
  }
  
  
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>

  );
};
