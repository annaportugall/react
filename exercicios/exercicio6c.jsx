import { useState } from 'react'
import './App.css'

function InputTempoReal(){
    const [texto, setTexto] = useState('');

    return(
      <div>
        <p>Voce digitou: {texto}</p>
        <input type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder = "Digite aqui"
        className="digite" />
      </div>
    )
  }

  export default InputTempoReal