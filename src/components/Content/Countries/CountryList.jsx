import React from 'react';
import CountryCard from './CountryCard';
import "./CountryList.css";

const CountryList = ({ countries }) => {
  return (
    <div className="cardContainer">
      {countries.map(country => <CountryCard key={country.name.common} country={country} />)}
    </div>
  );
}

export default CountryList;