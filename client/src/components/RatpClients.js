import React from 'react';
import '../App.css';

class RatpClients extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      result: []
    }
  }

  getEndpoint(){
    if (this.props.limit !== ""){
      if (this.props.genre === "tous"){
        return "http://localhost:8888/api/maratp/clients?limit="+this.props.limit
      }
      if (this.props.genre === "homme" || "femme") {
        return "http://localhost:8888/api/maratp/clients?limit="+this.props.limit+"&genre="+this.props.genre
      }
    }
  }
  
  fetchAPI(){
    const api = this.getEndpoint()
    fetch(api)
    .then(res => res.json())
    .then((response) => {
      this.setState({ result: response.data })
    })
    .catch(error => console.log('Error:', error));
  }

  getClients(){
    if (this.props.limit !== ""){
      return this.state.result.map((client, i) => [
        <div className="Client" key={i}>
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
        </div>
      ])
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.limit !== this.props.limit || prevProps.genre !== this.props.genre) {
      this.fetchAPI()
    }
  }

  render() {
      let eachClient = this.getClients()
    return (
      <div className="Clients">
        {eachClient}    
      </div>
    );
  }
}

export default RatpClients;