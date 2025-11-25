import { useState } from 'react'
import './App.css'

function MostrarFoto(){
    const [mostrar, setMostrar] = useState(true);

    return(
      <div>
        <button onClick={() => setMostrar(!mostrar)}> {mostrar ? 'Ocultar foto' : 'Exibir foto'}</button>
        {mostrar && <img src="vasco.jpg" ></img>}
      </div>
    )
  }

  export default MostrarFoto