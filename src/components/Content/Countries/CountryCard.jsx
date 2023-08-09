import React from 'react';
import "./CountryCard.css";

const CountryCard = ({ country }) => {
  return (
    <div className='country-card-container'>
    <div className="country-card">
      <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} />
      <h2>{country.name.common}</h2>
    </div>
    </div>
  );
}

export default CountryCard;
