import { useState } from "react";
export const AddCategory = () => {
  const [input, setinput] = useState('second');
  
  const onInputChange = ({target}) =>{
    setinput(event.target.value)
  }

  const onSubmit = (event) =>{
    event.preventDefault();
    console.log(input)
  }

  return (
    <form onSubmit={(event)=>onSubmit(event)}>
      <input
          type="text"
          placeholder="Buscar gifs"
          value={input}
          onChange={onInputChange}
      />
    </form>
  )
}
