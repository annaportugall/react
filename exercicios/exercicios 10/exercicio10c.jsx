import { useState } from 'react';
import './App.css';

function Conversor() {
  const [valor, setValor] = useState(1);
  const [origem, setOrigem] = useState("BRL");
  const [destino, setDestino] = useState("USD");
  const [resultado, setResultado] = useState(null);

  // taxas aproximadas
  const taxas = {
    BRL: { USD: 0.19, EUR: 0.18 },
    USD: { BRL: 5.30, EUR: 0.93 },
    EUR: { BRL: 5.70, USD: 1.08 },
  };

  const calcular = () => {
    if (origem === destino) {
      setResultado(valor); // mesma moeda
      return;
    }

    const taxa = taxas[origem][destino];
    const convertido = valor * taxa;

    setResultado(convertido.toFixed(2));
  };

  return (
    <div>
      <h2>Conversor de Moedas</h2>

      <input
        type="number"
        value={valor}
        onChange={(e) => setValor(parseFloat(e.target.value))}
        placeholder="Valor"
      />

      <br />

      <label>Moeda de origem: </label>
      <select value={origem} onChange={(e) => setOrigem(e.target.value)}>
        <option value="BRL">Real (BRL)</option>
        <option value="USD">Dólar (USD)</option>
        <option value="EUR">Euro (EUR)</option>
      </select>

      <br />

      <label>Moeda de destino: </label>
      <select value={destino} onChange={(e) => setDestino(e.target.value)}>
        <option value="BRL">Real (BRL)</option>
        <option value="USD">Dólar (USD)</option>
        <option value="EUR">Euro (EUR)</option>
      </select>

      <br /><br />

      <button onClick={calcular}>Converter</button>

      <h2>
       <h2>Resultado: {resultado} {destino}</h2>
      </h2>
    </div>
  );
}

export default Conversor;
