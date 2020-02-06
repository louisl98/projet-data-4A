import React from 'react';
// import logo from './logo.svg';
import './App.css';
import RatpClients from './components/RatpClients';
import SearchForm from './components/SearchForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Clients MaRATP</h1>
        <SearchForm/>
      </header>
      <RatpClients limit={SearchForm.state}/>
    </div>
  );
}

export default App;
