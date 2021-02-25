import React, { Component } from 'react'
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import CountriesList from './components/CountriesList.js';
import CountryDetail from './components/CountryDetails.js';
import countries from './countries.json';
import CountryDetails from './components/CountryDetails.js';

import Navbar from './components/Navbar.js'

class App extends Component {
  state = {
    countries: [],
  };
  // console.log(countries)
  componentDidMount() {
    this.setState({ countries });
  }
  
  render() {
     const { countries } = this.state;
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="row">
            <CountriesList countries={countries} />
            <Route
              path="/countries/:cca3"
              render={(routerProps) => {
                return (
                  <CountryDetails
                    countries={this.state.countries}
                    {...routerProps}
                  />
                );
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
