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
    await fetch('https://data-ratp-4a.herokuapp.com/api/clients')
    .then(res => res.json())
    .then((response) => {
      this.setState({ clients: response.data })
    })
    .catch(error => console.log('Error:', error));
  }
  render() {
    function do_check(){ 
      var return_value=prompt("Password:");
      if(return_value!=="equipe01")
      window.location = "/";
    }
    do_check()
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

export default Clients;