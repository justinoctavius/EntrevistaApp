import React from 'react';
import './style.css';

function Card({ data }) {
  return (
    <div>
      {data && (
        <div className="card">
          <div className="card_header">
            <h1 className="card_title">{data.categories[0]}</h1>
            <img src={data.icon_url} alt={data.categories[0]} />
          </div>
          <div className="card_body">
            <p>{data.value}</p>
          </div>
          <div>
            <button>Añadir Favoritos</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
