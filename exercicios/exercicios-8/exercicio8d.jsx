import { useState } from 'react';
import './App.css'


function Placar() {
  const [time, setTime] = useState('');
  const [lista, setLista] = useState([]);
  const [pontos, setPontos] = useState('')

  const [editar, setEditar] = useState(null)
  const [editarPontos, setEditarPontos] = useState('')

  const addTime = () => {
    if (time.trim() && pontos.trim()) {

      const novaLista = [...lista, { nome: time, pontos: Number(pontos) }]

      novaLista.sort((a, b) => b.pontos - a.pontos)

      setLista(novaLista);
      setTime('');
      setPontos('')
    }
  };

  const edicao = (index) => {
    const novaLista = [...lista]
    novaLista[index].pontos = Number(editarPontos)

    novaLista.sort((a, b) => b.pontos - a.pontos)

    setLista(novaLista)
    setEditar(null)
    setEditarPontos('')
  }

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
          <li key={index}>{timeLista.nome}-{editar == index ? (
            <>
              <input type="number"
                value={editarPontos}
                onChange={(e) => setEditarPontos(e.target.value)} />

              <button onClick={() => edicao(index)}>salvar</button>
              <button onClick={() => setEditar(null)}>cancelar</button>
            </>) : (<>
              <strong> {timeLista.pontos}</strong>
              <button onClick={() => {
                setEditar(index)
                setEditarPontos(timeLista.pontos)
              }}> editar</button></>)}</li>
        ))}
      </ul>
    </div>
  );
}

export default Placar;
