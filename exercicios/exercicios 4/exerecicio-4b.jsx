import { useState } from 'react'
import './App.css'


function CartaoLivro({ titulo, autor, ano, genero }) {
  return (
    <div className="cartao-livro">
      <h2>
        <strong>Título: </strong>
        {titulo}
      </h2>
      <p>
        <strong>Autor: </strong>
        {autor}
      </p>
      <p>
        <strong>Ano: </strong>
        {ano}
      </p>
      <p>
        <strong>Gênero: </strong>
        {genero}
      </p>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <CartaoLivro
        titulo={"Percy Jackson e Os Olimpianos: O ladrão de Raios"}
        ano={"2005"}
        autor={"Rick Riordan"}
        genero={"Fantasia"}
      />
    </div>
  );
}

