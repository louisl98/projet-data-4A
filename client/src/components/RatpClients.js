import React from 'react';
import '../App.css';

class RatpClient extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clients: []
    }
  }
  async componentDidMount() {
    await fetch('http://localhost:8888/api/clients')
    .then(res => res.json())
    .then((response) => {
      this.setState({ clients: response.data })
    })
    .catch(error => console.log('Error:', error));
  }
  render() {
    let eachClient = this.state.clients.map((client, i) => [
      <div className="client" key={i}>
        <p>Identifiant : {client.identifiant}</p>
        <p>Age : {client.age}</p>
        <p>Genre : {client.genre}</p>
        <p>Code postal : {client.code_postal}</p>
        <p>Ancienneté : {client.anciennete}</p>
        <p>Abonné alerting : {client.abonne_alerting}</p>
        <p>Alertes activées : {client.alertes}</p>
        <p>Titre de transport : {client.titre_transport}</p>
        <p>Fréquence transports : {client.frequence_transport}</p>
        <p>Favoris horaires : {client.favoris_horaires}</p>
        <p>Favoris adresses : {client.favoris_adresses}</p>
        <hr/>
      </div>
    ])
    return (
      <div>
        {eachClient}    
      </div>
    );
  }
}

export default RatpClients;