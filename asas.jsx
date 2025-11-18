import { useState } from "react";
import "./App.css";


/*function App(){
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
   
} */


  /*function CardTempo({ temperatura, clima, cidade, umidade }) {
  const getIcone = (clima) => {
    const climas = {
      ensolarado: "☀️",
      nublado: "☁️",
      tempestuoso: "🌧️",
      nevando: "❄️",
    };
    return climas[clima.toLowerCase()] || "🌤️";
  };  
  const getCorTemperatura = (temp) => {
    if (temp < 15) return "#4a90e2";
    if (temp < 25) return "#f5a623";
    return "#d0021b";
  };
  return (
    <div
      style={{
        border: "2px solid #ddd",
        borderRadius: "15px",
        padding: "25px",
        textAlign: "center",
        background: "linear-gradient(135deg, #74b9ff, #0984e3)",
        color: "white",
        maxWidth: "200px",
        minWidth: "200px",
      }}
    >
      <h2 style={{ margin: "0 0 15px 0" }}></h2>
      <div style={{ fontSize: "60px", margin: "10px 0" }}>
        {getIcone(clima)}{" "}
      </div>
      <div
        style={{
          fontSize: "48px",
          fontWeight: "bold",
          color: getCorTemperatura(temperatura),
          textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
        }}
      >
        {temperatura}°C
      </div>
      <p style={{ fontSize: "18px", margin: "10px 0" }}></p>
      <p style={{ fontSize: "14px", opacity: 0.9 }}>Umidade: {umidade}%</p>
    </div>
  );
}

function App() {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    marginTop: "50px",
    flexWrap: "wrap",
    width: "100%"
  };
  return (
    <div style={containerStyle}>
      <CardTempo
        temperatura={31}
        clima="ensolarado"
        cidade="Rio de Janeiro"
        umidade={65}
      />
      <CardTempo
        temperatura={20}
        clima="nublado"
        cidade="São Paulo"
        umidade={65}
      />
      <CardTempo
        temperatura={12}
        clima="nevando"
        cidade="Curitiba"
        umidade={65}
      />
    </div>
  );
};

export default App; 

 export default function MyApp() {
  return (
    <div>
      <h1>App aula 1</h1>
      <App/>
      <CardTempo/>
    </div>
  );
}*/

/*function Contador(){
  const [count, setCount] = useState(0);

  return(
    <div>
      <h2>Contador: {count}</h2>
      <button onClick={() => setCount (count + 1)}> +1</button>
      <button onClick={() => setCount (count - 1)}> -1</button>
    </div>
  )
}

export default Contador;*/

/*function Contador(){
  const [count, setCount] = useState(10);

  return(
    <div>
      <h2>Contador: {count}</h2>
      <button onClick={() => setCount (count + 5)}> +5 </button>
      <button onClick={() => setCount (count - 5)}> -5 </button>
    </div>
  )
}

export default Contador;*/



/*const getCorTemperatura = (temp) => {
    if (temp < 15) return "#4a90e2";
    if (temp < 25) return "#f5a623";
    return "#d0021b";
  };*/

  /*function Termometro(){
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

  export default Termometro; */

/*function CartaoLivro({ titulo, autor, ano, genero }) {
  return (
    <div className="cartao-livro">
      <h2>
        <strong>Título: </strong>
        {titulo}
      </h2>
      <p>
        <strong>Autor: </strong>
        {autor}
      </p>
      <p>
        <strong>Ano: </strong>
        {ano}
      </p>
      <p>
        <strong>Gênero: </strong>
        {genero}
      </p>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <CartaoLivro
        titulo={"Percy Jackson e Os Olimpianos: O ladrão de Raios"}
        ano={"2005"}
        autor={"Rick Riordan"}
        genero={"Fantasia"}
      />
    </div>
  );
}*/

/*function BemVindo(){
  return(
  <h1>Bem BemVindo ao React!</h1>
  )
}

export default BemVindo; */

/*function HelloWorld(){
  return(
  <h1>Ola mundo!</h1>
  )
}

export default HelloWorld;*/
/*
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

export default App; */
/*
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

export default App;*/

/*function BoasVindas({usuario}){
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

export default App; */



/*function StatusJogo({nivel, pontos}){
  const maxPontos = nivel * 1000;
  const progresso = Math.min((pontos / maxPontos) * 100, 100);
  const corBarra = progresso < 30 ? 'red' : progresso < 70 ? 'orange' : 'green';

  return(
    <div>
      <h2>Nivel {nivel}</h2>
      <p>Pontos: {pontos} / {maxPontos} </p>

      <div style={{
        width: '200px',
        height: '20px',
        backgroundColor: '#ddd',
        borderRadius: '10px',
        overflow: 'hidden'
      }}>
        <div style={{
          width: `${progresso}%`,
          height: '100%',
          backgroundColor: corBarra,
          transition: 'all 0.3s ease'
        }}></div>
      </div>
      <p>{progresso.toFixed(1)}% completo</p>
    </div>
  )
  }
   export default function App(){
    return <StatusJogo nivel={10} pontos={5000}/>
} */

  /*function Hobbie(){
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

  export default Hobbie; */

  /*function ComidasFav(){
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

  export default ComidasFav; */

 /* function Menu(){
    const pratos = [
      {
        nome: "Lasanha Bolonhesa",
        preco: 35.5,
        descricao: "Massa em camanas com molho bolonesa, queijo e bechamel."
      },
      {
        nome: "Strogonoff",
        preco: 25,
        descricao: "iscas de frango, com creme de leite e ketchup"
      },
      {
        nome: "salpicão",
        preco: 25, 
        descricao: "salada de frango com maionese, presunto, milho, cenoura"
      }
    ];

    return(
      <div>
        <h1>Cardápio</h1>
        <div>{pratos.map((prato, index) => (
          <div key = {index}>
            <h3>{prato.nome}</h3>
            <p>R${prato.preco.preco.toFixed(2)}</p>
            <p>{preco.descricao}</p>
          </div>
        ))}
          
        </div>
      </div>
    )
  }

  export default Menu*/ 

 /* function MostrarEsconder(){
    const [mostrar, setMostrar] = useState(true);
    return(
      <div>
        <button onClick={() => setMostrar(!mostrar)}> {mostrar ? 'Esconder' : 'Mostrar'}</button>
        {mostrar && <p> Este texto pode ser mostrado ou escondido</p>}
      </div>
    );
  }

  export default MostrarEsconder*/ 
  
  /*function MostrarFoto(){
    const [mostrar, setMostrar] = useState(true);

    return(
      <div>
        <button onClick={() => setMostrar(!mostrar)}> {mostrar ? 'Ocultar foto' : 'Exibir foto'}</button>
        {mostrar && <img src="vasco.jpg" ></img>}
      </div>
    )
  }

  export default MostrarFoto */

  /*function Cofre(){
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

  export default Cofre*/

  /*function InputTempoReal(){
    const [texto, setTexto] = useState('');

    return(
      <div>
        <p>Voce digitou: {texto}</p>
        <input type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder = "Digite aqui"
        className="digite" />
      </div>
    )
  }

  export default InputTempoReal*/ 
  
  /*function LetraMaiuscula(){
    const [texto, setTexto] = useState('');

    return(
      <div>
      <p>Versão maiúscula da versão do que você digitou: {texto.toUpperCase()}</p>
      <input type="text" 
      value = {texto}
      onChange={(e) => setTexto(e.target.value)}
      placeholder="Digite aqui"
      className="digite" />
      </div>
    )
  }

  export default LetraMaiuscula */
  
 /* function ValidadorTexto(){
    const[texto, setTexto] = useState('')
    const validador = texto.length >= 3 


    return(
      <div>
        <h2>seu texto possui </h2>
        <input type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="digite aqui" />
       {validador ? (
        <p style={{color: "green"}}>Texto Válido!</p>
       ) : ( 
       <p style={{color: "red"}}>Digite no minimo tres caracteres</p> )}
      </div>
   
      
    )
  }

  export default ValidadorTexto */

 /*function ContadorCaracter() {
  const [texto, setTexto] = useState("");
  const limite = 50;

  const handleChange = (e) => {
    const textoNovo = e.target.value;
    if (textoNovo.length <= limite) {
      setTexto(textoNovo);
    }
  };

  return (
    <div>
      <h2>o seu texto possui {texto.length}/50</h2>
      <input
        type="text"
        value={texto}
        onChange={handleChange}
        placeholder="digite aqui"
      />
    </div>
  );
}

export default ContadorCaracter; */

/*function AdicionarLista(){
  const [item, setItem] = useState('');
  const [lista, setLista] = useState([]);

  const adicionarItem = () => {
    if (item.trim()) {
      setLista([...lista, item]);
      setItem('');
    }
  }

  return (
    <div> 
      <input type="text"value={item} onChange={(e) => setItem(e.target.value)} placeholder="Digite um item" />
      <button onClick={adicionarItem}>Adicionar</button>
      <ul>
        {lista.map((itemLista, index) => ( 
          <li key={index}>{itemLista}</li>
        ))}
      </ul>
    </div>
  );
}

export default AdicionarLista*/

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

