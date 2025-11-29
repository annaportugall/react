import { useState } from "react";
import './App.css'


function Calculadora() {
  const [n1, setN1] = useState("");
  const [n2, setN2] = useState("");
  const [operacao, setOperacao] = useState("adicao");
  const [resultado, setResultado] = useState(null);

  const calcular = () => {
    const num1 = parseFloat(n1);
    const num2 = parseFloat(n2);
    let res;

    if (operacao === "adicao") {
      res = num1 + num2;
    } else if (operacao === "subtracao") {
      res = num1 - num2;
    } else if (operacao === "multiplicacao") {
      res = num1 * num2;
    } else if (operacao === "divisao") {
      res = num1 / num2;
    }

    setResultado(res);
  };

  return (
    <div>
      <h1>Calculadora</h1>

      <select value={operacao} onChange={(e) => setOperacao(e.target.value)}>
        <option value="adicao">+</option>
        <option value="subtracao">-</option>
        <option value="multiplicacao">*</option>
        <option value="divisao">/</option>
      </select>
      <br />

      Número 1:{" "}
      <input
        type="number"
        value={n1}
        onChange={(e) => setN1(e.target.value)}
      />
      <br />

      Número 2:{" "}
      <input
        type="number"
        value={n2}
        onChange={(e) => setN2(e.target.value)}
      />
      <br />

      <button onClick={calcular}>Calcular</button>

      {resultado !== null && <h2>Resultado: {resultado}</h2>}
    </div>
  );
}

export default Calculadora;
