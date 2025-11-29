import { useState } from 'react';
import './App.css'

function MudarFonte(){
  const [fonte, setFonte] = useState("20px");

  const mudarFonte = (fonteNova) => {
    setFonte(fonteNova)
    document.getElementById('text').style.fontSize= fonteNova
  }

  return(
    <div>
      <h2 id = 'text' >Mudar Fonte</h2>
      <button onClick={() => mudarFonte('10px')}>P</button>
      <button onClick={() =>  mudarFonte('20px')}>M</button>
      <button onClick={() =>  mudarFonte('30px')}>G</button>
     
    </div>
  )
}

export default MudarFonte