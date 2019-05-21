import React, { Component } from 'react';
import MainPage from './components/MainPage';
import Header from './components/Header';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <MainPage/>
        
      </div>
    );
  }
}

export default App;
