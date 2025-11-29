import { useState } from 'react';
import './App.css'

function MudarFundo(){
  const [cor, setCor] = useState("white");

  const mudarCor = (corNova) => {
    setCor(corNova)
    document.body.style.backgroundColor = corNova
  }

  return(
    <div>
      <h2 style={{ color: "black" }}>Mudar cor do fundo</h2>
      <button onClick={() => mudarCor('blue')}>Azul</button>
      <button onClick={() => mudarCor('green')}>Verde</button>
      <button onClick={() => mudarCor('violet')}>Roxo</button>
      <button onClick={() => mudarCor('white')}>Branca</button>
    </div>
  )
}

export default MudarFundo