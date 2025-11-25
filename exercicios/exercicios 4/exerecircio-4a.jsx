import { useState } from 'react'
import './App.css'


function App(){
  return (
    <div> 
      
      <CartaoPessoal nome  = "Maria eduarda" idade= "18" profissao = "dev junior"/>
      
    </div>
  )
}
function CartaoPessoal ({nome, idade, profissao}){
  return (
    <div>
      <h3>Nome:  </h3> <p> {nome}</p>
      <h3>Idade:  </h3> <p>{idade}</p>
      <h3>Profissão: </h3> <p>{profissao}</p>
     </div>
     
  )
   
} 
  export default App