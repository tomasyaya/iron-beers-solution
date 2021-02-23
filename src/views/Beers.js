import React from 'react';
import { Link } from 'react-router-dom';
import { getAllBeersService, queryBeerService } from '../beer.service';

function Beers() {
  const [beers, setBeers] = React.useState([]);
  const [query, setQuery] = React.useState('');

  const handleGetBeers = async () => {
    const { data } = await getAllBeersService();
    setBeers(data);
  };
  const handleQueryBeers = async () => {
    const { data } = await queryBeerService(query);
    setBeers(data);
  };
  const memoHandleGetBeers = React.useCallback(handleGetBeers, [setBeers]);
  const memoHandleQueryBeers = React.useCallback(handleQueryBeers, [
    query,
    setBeers,
  ]);
  React.useEffect(() => {
    if (!query) {
      memoHandleGetBeers();
    }
  }, [query, memoHandleGetBeers]);

  React.useEffect(() => {
    if (query) {
      memoHandleQueryBeers();
    }
  }, [query, memoHandleQueryBeers]);

  return (
    <div>
      <h2>Beers</h2>
      <div>
        <input
          type="text"
          name="query"
          id="query"
          onChange={({ target }) => setQuery(target.value)}
        />
      </div>
      <div>
        {beers.map((beer) => (
          <div key={beer._id}>
            <h5>{beer.name}</h5>
            <p>{beer.description}</p>
            <Link to={`/beers/${beer._id}`}>Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Beers;
