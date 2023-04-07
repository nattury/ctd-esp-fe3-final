import React from "react";
import { useState } from "react";

const Form = () => {

  const [name,setName]=useState("hola");

  const handleSubmit=(e)=>{
    e.preventDefault()
    name.length>5 ? alert(`Gracias ${name}, te contactaremos cuanto antes vía mail.`) 
    : alert("Por favor valide su nombre.")
  }
  return (
    <div>
      <form className="formulario" onSubmit={handleSubmit}>
        <label htmlFor="">Nombre</label>
        <input type="text"name='username' onChange={(e)=> setName(e.target.value)}/>
        <label htmlFor="">Correo</label>
        <input type="email"name='email' id="" />
        <button className="btn3">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
