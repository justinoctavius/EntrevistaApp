import React, { useEffect, useState } from 'react';

function Categories({ setData }) {
  const [categories, setCategories] = useState();

  useEffect(() => {
    fetch('https://api.chucknorris.io/jokes/categories')
      .then((res) => res.json())
      .then((res) => setCategories([...res]));
  }, []);

  const getData = (category) => {
    console.log('a');
    fetch(`https://api.chucknorris.io/jokes/random/?category=${category}`)
      .then((res) => res.json())
      .then((res) => setData({ ...res }));
  };

  return (
    <div>
      <label htmlFor="categories">Categorias: </label>
      <select
        name="categories"
        onChange={(e) => getData(e.currentTarget.value)}
      >
        {categories &&
          categories.length > 0 &&
          categories.map((category) => {
            return (
              <option key={category} value={category}>
                {category}
              </option>
            );
          })}
      </select>
    </div>
  );
}

export default Categories;
