import { useState } from 'react';
import './App.css'


function MudarHumor() {
  const [humor, setHumor] = useState("white");

  const mudarHumor = (novoHumor) => {
    setHumor(novoHumor);
    document.body.style.backgroundColor = novoHumor;
  };

  const mudarFonte = (novoTexto) => {
    document.getElementById('text').innerText = novoTexto;
  };

  return (
    <div>
      <h2 style={{ color: "black" }} id="text">Mudar humor</h2>

      <button onClick={() => { mudarHumor('blue'); mudarFonte("Buaaaaaa!!"); }}>😭</button>
      <button onClick={() => { mudarHumor('green'); mudarFonte("Ugh"); }}>🤢</button>
      <button onClick={() => { mudarHumor('red'); mudarFonte("Grrr!"); }}>😡</button>
      <button onClick={() => mudarHumor('white')}>😐 Neutro</button>
    </div>
  );
}

export default MudarHumor;
