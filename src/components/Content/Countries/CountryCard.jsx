import React from 'react';
import "./CountryCard.scss";
import { Link } from 'react-router-dom';

const CountryCard = ({ country }) => {
  return (
    <div className='country-card-container'>
    <div className="country-card">
    <Link to='/countries/country' className='flags-link'>
      <img src={country.flags.svg}
      alt={`Флаг ${country.name.common}`} />
      <h2>{country.name.common}</h2>
    </Link>
    </div>
    </div>
  );
}

export default CountryCard;
