import { useState } from 'react';
import './App.css';

function Curtir() {
  const [like, setLike] = useState(0);
  const [curtido, setCurtido] = useState(false);

  const toggleLike = () => {
    if (curtido) {
      setLike(like - 1);
      setCurtido(false);
    } else {
      setLike(like + 1);
      setCurtido(true);
    }
  };

  return (
    <div>
      <button
        onClick={toggleLike}
        style={{
          backgroundColor: curtido ? '#f80505' : '#000000',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        {curtido ? 'Curtido' : 'Curtir'}
      </button>

      <p><strong>Likes: {like}</strong></p>
    </div>
  );
}

export default Curtir;
