import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CountryList from './CountryList';
import ReactPaginate from 'react-paginate';
import './Countries.scss'

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const countriesPerPage = 9;
  const pagesVisited = currentPage * countriesPerPage;
  
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        const countries = response.data;
        setCountries(countries);
      } catch (err) {
        console.log('Error fetching countries', err);
      }
    }
    fetchCountries();
  }, []);

  const pageCount = Math.ceil(countries.length / countriesPerPage);
  
  const changePage = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className='container'>
      <h1>Страны мира</h1>
      <div className='paginations'>
      <ReactPaginate
        previousLabel={"назад"}
        nextLabel={"вперед"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationButtons"}
        previousLinkClassName={"previousButton"}
        nextLinkClassName={"nextButton"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
      </div>
      <div className='countries-container'>
      <CountryList countries={countries.slice(pagesVisited, pagesVisited + countriesPerPage)} />
      </div>
    </div>
  );
}

export default Countries;
