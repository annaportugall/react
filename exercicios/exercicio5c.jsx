import { useState } from 'react'
import './App.css'

function Termometro(){
    const [temp, setTemp] = useState(20);

     const getCorTemperatura = (temp) => {
        if(temp < 20) return "#4a90e2";
        return '#f5a623'
      };

    return(
      <div>
        <h2 style={{color: getCorTemperatura(temp)}}>Temperatura: {temp}°C</h2>
        <button onClick={() => setTemp (temp + 2)}> +2°C </button>
        <button onClick={() => setTemp (temp - 2)}> -2°C </button>
      </div>
      )

     
  }

  export default Termometro;