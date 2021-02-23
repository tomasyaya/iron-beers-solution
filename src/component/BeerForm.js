import React from 'react';
import { Redirect } from 'react-router-dom';
import { createBeerService } from '../beer.service';

function BeerForm() {
  const initialState = {
    name: '',
    description: '',
  };

  const [state, setState] = React.useState(initialState);
  const [redirect, setRedirect] = React.useState(false);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    await createBeerService(state);
    setRedirect(true);
  };
  if (redirect) {
    return <Redirect to="/beers" />;
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '500px',
        margin: '10px auto',
      }}
    >
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={state.name}
        onChange={handleChange}
      />
      <label htmlFor="description">Description</label>
      <textarea
        name="description"
        id="description"
        cols="30"
        rows="10"
        value={state.description}
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default BeerForm;
