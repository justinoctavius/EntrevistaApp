import React from 'react';
import Card from '../card';
import './style.css';

function Cards({ datas }) {
  return (
    <div className="cards">
      {datas && datas.result ? (
        datas.result.map((data) => <Card data={data} />)
      ) : (
        <Card data={datas} />
      )}
    </div>
  );
}

export default Cards;
