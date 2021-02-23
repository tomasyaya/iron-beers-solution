import React from 'react';
import { getRandomBeer } from '../beer.service';

function RandomBeer() {
  const [randomBeer, setRandomBeer] = React.useState({});
  React.useEffect(() => {
    getRandomBeer().then(({ data }) => {
      setRandomBeer(data);
    });
  }, []);
  return (
    <div>
      <h2>Random Beer</h2>
      <h4>{randomBeer.name}</h4>
      <p>{randomBeer.tagline}</p>
    </div>
  );
}

export default RandomBeer;
