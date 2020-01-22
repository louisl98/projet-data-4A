import React from 'react';
import '../App.css';

class Clients extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clients: []
    }
  }
  async componentDidMount() {
    await fetch('http://localhost:3001/api/clients')
    .then(res => res.json())
    .then((response) => {
      this.setState({ clients: response.data })
    })
    .catch(error => console.log('Error:', error));
  }
  render() {
    let eachClient = this.state.clients.map((client, i) => [
      <div className="client" key={i}>
        <p>Age: {client.age}</p>
      </div>
    ])
    return (
      <div>
        {eachClient}    
      </div>
    );
  }
}

export default Clients;