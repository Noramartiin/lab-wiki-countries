import React, { Component } from 'react'
import {Link, Route} from 'react-router-dom'
import CountryDetails from './CountryDetails.js'


 class CountriesList extends Component {

   render() {
     const { countries } = this.props;
     return (
       <div className="columns">
         <div>
           <h3>Countries</h3>
           {countries.map((country, index) => {
             return (
               <div key={country.cca3}>
                 <Link to={`/countries/${country.cca3}`}>
                   {country.name.official}
                 </Link>
               </div>
             );
           })}
         </div>
       </div>
     );
   }
 }
export default CountriesList;