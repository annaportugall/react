import { useState } from 'react';
import './App.css';

function Formulario() {
  const [dados, setDados] = useState({
    cidade: '',
    estado: '',
    cep: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setDados({
      ...dados,
      [name]: value
    });
  };

  return (
    <div>
      <h2>Formulário</h2>

      <form>
        <div>
          <label>Cidade: </label>
          <input
            type="text"
            name="cidade"
            value={dados.cidade}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Estado: </label>
          <input
            type="text"
            name="estado"
            value={dados.estado}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>CEP: </label>
          <input
            type="text"
            name="cep"
            value={dados.cep}
            onChange={handleChange}
          />
        </div>
      </form>

      <div>
        <h3>Dados preenchidos</h3>
        <p><strong>Cidade: {dados.cidade}</strong></p>
        <p><strong>Estado: {dados.estado}</strong></p>
        <p><strong>CEP: {dados.cep}</strong></p>
      </div>
    </div>
  );
}

export default Formulario;
