import { useState } from 'react'
import './App.css'


 function ContadorCaracter() {
  const [texto, setTexto] = useState("");
  const limite = 50;

  const handleChange = (e) => {
    const textoNovo = e.target.value;
    if (textoNovo.length <= limite) {
      setTexto(textoNovo);
    }
  };

  return (
    <div>
      <h2>o seu texto possui {texto.length}/50</h2>
      <input
        type="text"
        value={texto}
        onChange={handleChange}
        placeholder="digite aqui"
      />
    </div>
  );
}

export default ContadorCaracter;