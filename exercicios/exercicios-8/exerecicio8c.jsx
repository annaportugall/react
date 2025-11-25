import { useState } from 'react';
import './App.css'


function Placar() {
  const [time, setTime] = useState('');
  const [lista, setLista] = useState([]);

  const addTime = () => {
    if (time.trim()) {
      setLista([...lista, time]);
      setTime('');
    }
  };

  return (
    <div>
      <h2>Lista time
      </h2>
      <input 
        type="text"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        placeholder="Digite um time"
      />

      <button onClick={addTime}>Adicionar</button>

      <ul>
        {lista.map((timeLista, index) => (
          <li key={index}>{timeLista}</li>
        ))}
      </ul>
    </div>
  );
}

export default Placar;
