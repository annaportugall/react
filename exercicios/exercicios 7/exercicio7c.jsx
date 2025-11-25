import { useState } from 'react'
import './App.css'


  function ValidadorTexto(){
    const[texto, setTexto] = useState('')
    const validador = texto.length >= 3 


    return(
      <div>
        <h2>Digite aqui </h2>
        <input type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="digite aqui" />
       {validador ? (
        <p style={{color: "green"}}>Texto Válido!</p>
       ) : ( 
       <p style={{color: "red"}}>Digite no minimo tres caracteres</p> )}
      </div>
   
      
    )
  }

  export default ValidadorTexto