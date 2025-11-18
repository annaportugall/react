import { useState } from 'react'
import './App.css'


function ComidasFav(){
    const comidas = ["Strogonoff", "Macarrão", "Açaí"]
    return(
      <div>
        <h2> Minhas comidas favoritas</h2>
        <ul>{comidas.map((comidas, index) => (
          <li key={index}>{comidas}</li> 
        ))}
          </ul>
      </div>
    )
  }

  export default ComidasFav;