import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

class CountryDetails extends Component {
  // props={
  //     countries
  // }

  getCountry = () => {
    let cca3 = this.props.match.params.cca3;

    let countries = {
      cca3: cca3,
      name: this.props.countries.name,
      region: this.props.countries.region,
      capital: this.props.countries.capital,
    };

    this.setState({
      countries: countries,
    });
  };

  componentDidMount() {
    this.getCountry();
  }

  componentDidUpdate() {
    let cca3 = this.props.match.params.cca3;
    if (this.props.countries.cca3 !== cca3) {
      this.getCountry();
    }
  }

  render() {
    const { name, cca3, region, capital } = this.props.countries;
    // console.log(this.props.countries);
    return (
      <div className="columns">
        <div>City Detail page</div>
        <div>{name}</div>
        <div>{cca3}</div>
        <div>{region}</div>
        <div>{capital}</div>
      </div>
    );
  }
}
export default CountryDetails;
