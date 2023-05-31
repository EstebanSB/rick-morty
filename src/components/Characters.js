import React from 'react';

export default function Characters(props) {
  const { characters, setCharacters, nextPage, previousPage } = props;

  const resetCharacters = () => {
    setCharacters(null);
  };

  return (
    <div className="characters">
      <h1 className='title'>Personajes</h1>
      <br/>
      <button onClick={resetCharacters} className='btn-search'>Volver al Inicio</button>
      <div className="container-characters">
        {characters.map((character, index) => (
          <div className="character-container" key={index}>
            <div>
              <img src={character.image} alt={character.name} />
            </div>
            <div>
              <h3>{character.name}</h3>
              <h6>
                {character.status === "Alive" ? (
                  <>
                    <span className="alive"/>Alive
                  </>
                ) : (
                  <>
                    <span className="dead"/>Dead
                  </>
                )}
              </h6>
              <p>
                <span className="text-grey">Episodios: </span>
                <span>{character.episode.length}</span>
              </p>
              <p>
                <span className="text-grey">Especie: </span>
                <span>{character.species}</span>
              </p>
              <p>
                <span className="text-grey">Locacion: </span>
                <span>{character.origin.name}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination-buttons" >
        <button onClick={previousPage} disabled={characters.length === 0} className='btn-search' style={{ marginRight: '10px' }}>Anterior</button>
        <button onClick={nextPage} className='btn-search'>Siguiente</button>
      </div>
      <br/>
      <button onClick={resetCharacters} className='btn-search'>Volver al Inicio</button>
    </div>
  );
}
