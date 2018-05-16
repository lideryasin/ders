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
      apiKey: "AIzaSyANh1XxGP8J_vM662yHVt35D1m-pKiY6AI",
      authDomain: "ogrenci-bae5d.firebaseapp.com",
      databaseURL: "https://ogrenci-bae5d.firebaseio.com",
      projectId: "ogrenci-bae5d",
      storageBucket: "ogrenci-bae5d.appspot.com",
      messagingSenderId: "8287473053"
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
