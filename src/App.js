import React, { Component } from 'react';
import Navbar from './components/navbar/navbar';
import Ekle from './container/ekle/ekle';
import Listele from './container/listele/listele';
import { HashRouter, Route } from 'react-router-dom';
import firebase from 'firebase';
import './App.css';

class App extends Component {

  constructor() {
    super();

    firebase.initializeApp({

    });
  }

  render() {
    return (
      <HashRouter>
        <div>
          <Navbar />
          <Route exact path="/" component={Ekle} />
          <Route path="/ekle" component={Ekle} />
          <Route path="/listele" component={Listele} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
