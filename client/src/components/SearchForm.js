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
  limitChange(event) {
    this.setState({limit: event.target.value});
  }
  genreChange(event) {
    this.setState({genre: event.target.value});
  }
  render() {
    return [
      <form key="form" className="SearchForm" onSubmit={this.handleSubmit}>
        <label htmlFor="limit">Limite de résultats :</label>
        <input name="limit" type="text" value={this.state.limit} onChange={this.limitChange} />
        <label htmlFor="genre">Genre :</label>
        <select onChange={this.genreChange} name="genre">
          <option value="tous">tous</option>
          <option value="homme">homme</option>
          <option value="femme">femme</option>
        </select>
      </form>,
      <RatpClients key="results" limit={this.state.limit} genre={this.state.genre}/>
    ];
  }
}

export default SearchForm;