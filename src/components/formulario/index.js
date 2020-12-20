import React from 'react';
import { Redirect } from 'react-router-dom';
import Categories from './categories';
import SearchBar from './searchBar';
import './style.css';

function Form({ setData }) {
  if (!sessionStorage.getItem('login')) {
    return <Redirect from="/home" to="/" />;
  }

  return (
    <div className="form">
      <Categories setData={setData} />
      <SearchBar setData={setData} />
    </div>
  );
}

export default Form;
