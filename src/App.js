import imgRickMorty from './img/rick-morty.png';
import './App.css';
import { useState, useEffect } from 'react';
import Characters from './components/Characters';

function App() {
  const [characters, setCharacters] = useState(null);
  const [page, setPage] = useState(1);

  const reqApi = async () => {
    const api = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
    const characterApi = await api.json();

    setCharacters(characterApi.results);
  };

  useEffect(() => {
    reqApi();
  }, [page]);

  const nextPage = () => {
    setPage(page + 1);
  };

  const previousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick Y Morty</h1>
        {characters ? (
          <Characters
            characters={characters}
            setCharacters={setCharacters}
            nextPage={nextPage}
            previousPage={previousPage}
          />
        ) : (
          <>
            <img src={imgRickMorty} alt='Rick Y Morty Img' className="img-home" /> 
            <button onClick={reqApi} className='btn-search'>Buscar Personaje</button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
