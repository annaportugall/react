import { useState } from 'react';
import './App.css';

function Formulario() {
  const [dados, setDados] = useState({
    nome: '',
    email: '',
    idade: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setDados({
      ...dados,
      [name]: value
    });
  };

    const vIdade = dados.idade >= 18 ? 'Idade válida' : 'Idade inválida, tenha no minimo 18 anos';
  const vEmail = dados.email.includes('@') ? ' Email válido' : 'Endereço de Email inválido'
  return (
    <div>
      <h2>Formulário</h2>

      <form>
        <div>
          <label>Nome: </label>
          <input
            type="text"
            name="nome"
            value={dados.nome}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={dados.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Idade: </label>
          <input
            type="number"
            name="idade"
            value={dados.idade}
            onChange={handleChange}
          />
        </div>
      </form>

      <div>
        <h3>Dados preenchidos</h3>
        <p><strong>Nome: {dados.nome} </strong></p>
        <p><strong>Email: {dados.email} {vEmail}</strong></p>
        <p><strong>Idade: {dados.idade} {vIdade}</strong></p>
      </div>
    </div>
  );
}

export default Formulario;
