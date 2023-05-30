export default function Characters(props) {
  const { characters } = props;
  return (
    <div className="characters">
      <h1 className='title'>Personajes</h1>
      <span className="back-home">Volver al Inicio</span> 
      <div className="container-characters">
        {characters.map((character, index) => (
          <div className="character-container" key={ index } >
            <div>{character.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
