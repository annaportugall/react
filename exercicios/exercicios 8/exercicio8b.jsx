import { useState } from 'react'
import './App.css'


function AdicionarItem(){
    const [item, setItem] = useState('');
    const [lista, setLista] = useState([]);

    const addItem = () => {
      if(item.trim()){
        setLista([...lista, item])
        setItem('');
      }
    }

    return(
      <div>
        <input type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)} 
        placeholder="digite uma nova tarefa"/>
        <button onClick={addItem}>Nova Tarefa</button>
        <ul>
          {lista.map((itemLista, index) => (
            <li key={index}>{itemLista}</li>
          ))}
        </ul>
      </div>
    )
  } 
  export default AdicionarItem;