import axios from 'axios';

import { Navbar } from '../../components/Navbar/Navbar';
import { Card } from '../../components/Card/Card';
import { useState } from 'react';

function Main() {
  const [pokemon, setPokemon] = useState({});
  const [renderCard, setRenderCard] = useState(false);

  function teste(event) {
    event.preventDefault();

    const name = event.target[0].value;
    const baseUrl = `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`;

    axios
      .get(baseUrl)
      .then((response) => {
        setPokemon(response.data);
        setRenderCard(true);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="main__container">
      <Navbar onSubmit={teste} />
      {renderCard === true ? (
        <Card
          name={pokemon.name}
          imageUrl={pokemon.sprites.other['official-artwork'].front_default}
        />
      ) : (
        ''
      )}
    </div>
  );
}

export { Main };
