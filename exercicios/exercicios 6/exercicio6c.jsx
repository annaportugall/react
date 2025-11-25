import { useState } from 'react'
import './App.css'

function Cofre(){
    const [mostrar, setMostrar] = useState(true);
    const itens = ['diamante real', 'trofeu de ouro', 'documento secreto', 'moedas antigas']

   
    return(
      <div>
        <button onClick={() => setMostrar(!mostrar)}> {mostrar ? 'Aberto🔓' : 'Fechado🔒'}</button>
        {mostrar && (
          <div style={{marginTop: '20px'}}>
            <h3>Conteúdo do cofre</h3>
            <ul style={{listStyle: 'none', padding: 0}}>
              {itens.map((item, index)=> (
                <li key={index} style={{
                  margin: '10px 0',
                  fontSize: '18px',
                  backgroundColor: 'rgba(255,255,255 0.2)',
                  padding: '9px',
                  borderRadius:'5px'
                }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }

  export default Cofre