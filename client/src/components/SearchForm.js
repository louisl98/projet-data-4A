import React from 'react';
import '../App.css';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: "",
      genre: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({limit: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  render() {
    return (
      <form className="SearchForm" onSubmit={this.handleSubmit}>
        <label htmlFor="limit">Limite de résultats :</label>
        <input name="limit" type="text" value={this.state.limit} onChange={this.handleChange} />
        <input type="submit" value="Filtrer"/>
      </form>
    );
  }
}

export default SearchForm;