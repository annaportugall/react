import { useState } from 'react';
import './App.css'


function Placar() {
  const [time, setTime] = useState('');
  const [lista, setLista] = useState([]);
  const [pontos, setPontos] = useState('')

  const addTime = () => {
    if (time.trim() && pontos.trim()) {

      const novaLista = [...lista, {nome: time, pontos: Number(pontos)}]

      novaLista.sort((a, b) => b.pontos - a.pontos)

      setLista(novaLista);
      setTime('');
      setPontos('')
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

      <input 
        type="number"
        value={pontos}
        onChange={(e) => setPontos(e.target.value)}
        placeholder="Pontos"
      />
      

      <button onClick={addTime}>Adicionar</button>

      <ul>
        {lista.map((timeLista, index) => (
          <li key={index}>{timeLista.nome}  {timeLista.pontos}</li>
        ))}
      </ul>
    </div>
  );
}

export default Placar;
