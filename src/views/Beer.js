import React from 'react';
import { withRouter } from 'react-router-dom';
import { getBeerService } from '../beer.service';

class Beer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: {},
    };
  }

  componentDidMount() {
    const { beerId } = this.props.match.params;
    getBeerService(beerId).then(({ data }) => {
      this.setState({ beer: data });
    });
  }

  render() {
    return (
      <div>
        <h3>Beer</h3>
        <h5>{this.state.beer.name}</h5>
        <p>{this.state.beer.tagline}</p>
      </div>
    );
  }
}

export default withRouter(Beer);
