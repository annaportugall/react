import { useState } from 'react'
import './App.css'


function Hobbie(){
    const hobbies = ["Leitura", "Música", "Série"];
    return(
      <div>
        <h2>Meus Hobbies Favoritos</h2>
        <ul>{hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
         </ul>
      </div>
    );
  }

  export default Hobbie