import React, { useState } from 'react';

function SearchBar({ setData }) {
  const [searchData, setSearchData] = useState();

  const searchHandler = () => {
    fetch(`https://api.chucknorris.io/jokes/search/?query=${searchData}`)
      .then((res) => res.json())
      .then((res) => setData({ ...res }));
  };

  return (
    <div>
      <label htmlFor="searchbar">Buscar: </label>
      <input
        type="text"
        name="searchbar"
        placeholder="Quieres Buscar algo?"
        onChange={(e) => setSearchData(e.target.value)}
      />
      <input type="button" value="Buscar" onClick={searchHandler} />
    </div>
  );
}

export default SearchBar;
