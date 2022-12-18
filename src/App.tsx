import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

interface PokemonFetch{
  name: string;
  weight: number;
  height: number;
}

function App() {
  const [data, setData] = useState<PokemonFetch>();

  useEffect(() => {
    async function getPokemon() {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/mew`
      );
      const data = await response.json();
      setData(data);
    }
    getPokemon();
    
  });

  return (
    <div className="App">
      <h5>Nome:</h5>
      <p>{data?.name}</p>
      <h5>Peso:</h5>
      <p>{data?.weight}kg</p>
      <h5>Altura:</h5>
      <p>{data?.height}</p>      
    </div>
  );
}

export default App
