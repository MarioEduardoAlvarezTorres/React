import { useState } from "react";


export const AddCategory = ({setCategories}) => {
  const [input, setinput] = useState('second');
  
  const onInputChange = ({target}) =>{
    setinput(target.value)
  }

  const onSubmit = (event) =>{
    event.preventDefault();
    if(input.trim().length <= 1) return;
    setCategories(categories=>[input,...categories])
    setinput('');
  }

  return (
    <form onSubmit={onSubmit}>
      <input
          type="text"
          placeholder="Buscar gifs"
          value={input}
          onChange={onInputChange}
      />
    </form>
  )
}
