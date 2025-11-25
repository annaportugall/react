import { useState } from 'react'
import './App.css'



 function Menu(){
    const pratos = [
      {
        nome: "Lasanha Bolonhesa",
        preco: 35.5,
        descricao: "Massa em camanas com molho bolonesa, queijo e bechamel."
      },
      {
        nome: "Strogonoff",
        preco: 25,
        descricao: "iscas de frango, com creme de leite e ketchup"
      },
      {
        nome: "salpicão",
        preco: 25, 
        descricao: "salada de frango com maionese, presunto, milho, cenoura"
      }
    ];

    return(
      <div>
        <h1>Cardápio</h1>
        <div>{pratos.map((prato, index) => (
          <div key = {index}>
            <h3>{prato.nome}</h3>
            <p>R${prato.preco.preco.toFixed(2)}</p>
            <p>{preco.descricao}</p>
          </div>
        ))}
          
        </div>
      </div>
    )
  }

  export default Menu