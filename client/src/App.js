import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'tachyons/css/tachyons.css';
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import CategoryForm from './containers/CategoryForm';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/categories" component={CategoryForm} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
