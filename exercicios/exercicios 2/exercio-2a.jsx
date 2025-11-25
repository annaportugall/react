import { useState } from 'react'
import './App.css'

function Saudacao({nome}){
  return(
    <div>
      <h3>Ola {nome}</h3>
    </div>
  )
}

function App(){
  return(
    <div>
      <Saudacao nome = "Anna"/> 
    </div>
  )
}

export default App