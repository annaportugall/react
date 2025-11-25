import { useState } from 'react'
import './App.css'

function LetraMaiuscula(){
    const [texto, setTexto] = useState('');

    return(
      <div>
      <p>Versão maiúscula da versão do que você digitou: {texto.toUpperCase()}</p>
      <input type="text" 
      value = {texto}
      onChange={(e) => setTexto(e.target.value)}
      placeholder="Digite aqui"
      className="digite" />
      </div>
    )
  }

  export default LetraMaiuscula