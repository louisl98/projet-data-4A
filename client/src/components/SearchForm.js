import React from 'react';
import RatpClients from './RatpClients';
import '../App.css';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: "",
      genre: "tous"
    };
    this.limitChange = this.limitChange.bind(this);
    this.genreChange = this.genreChange.bind(this);
  }
<<<<<<< HEAD

  limitChange(event) {
    this.setState({limit: event.target.value});
  }

=======
  limitChange(event) {
    this.setState({limit: event.target.value});
  }
>>>>>>> 52e6c697224a35e2eb2b5ba14d03a155ae687015
  genreChange(event) {
    this.setState({genre: event.target.value});
  }

  render() {
    return [
<<<<<<< HEAD
      <form key="form" className="SearchForm">
        <label htmlFor="limit">Limite de résultats :</label>
        <input name="limit" className="Limit" type="text" onChange={this.limitChange}/>
        <label htmlFor="genre">Genre :</label>
        <select className="Genre" onChange={this.genreChange} name="genre">
          <option value="tous">Tous</option>
          <option value="homme">Homme</option>
          <option value="femme">Femme</option>
=======
      <form key="form" className="SearchForm" onSubmit={this.handleSubmit}>
        <label htmlFor="limit">Limite de résultats :</label>
        <input name="limit" type="text" value={this.state.limit} onChange={this.limitChange} />
        <label htmlFor="genre">Genre :</label>
        <select onChange={this.genreChange} name="genre">
          <option value="tous">tous</option>
          <option value="homme">homme</option>
          <option value="femme">femme</option>
>>>>>>> 52e6c697224a35e2eb2b5ba14d03a155ae687015
        </select>
      </form>,
      <RatpClients key="results" limit={this.state.limit} genre={this.state.genre}/>
    ];
  }
}

export default SearchForm;