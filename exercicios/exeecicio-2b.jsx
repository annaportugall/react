import { useState } from 'react'
import './App.css'


function BoasVindas({usuario}){
  return(
    <div>
      <h3>Bem vindo de volta, {usuario}</h3>
    </div>
  )
}

function App(){
  return(
    <div>
      <BoasVindas usuario = "portugal.annaa"/> 
    </div>
  )
}

export default App