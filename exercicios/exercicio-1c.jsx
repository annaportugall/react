import { useState } from 'react'
import './App.css'

function DataHora({data, hora}){
  return(
    <div>
      <h3>Data: </h3><p>{data}</p>
      <h3>Hora: </h3><p>{hora}</p>
    </div>
  )
}

function App(){
  return(
    <div>
      <DataHora data= "07/10/2025" hora = "10:32"/> 
    </div>
  )
}

export default App;