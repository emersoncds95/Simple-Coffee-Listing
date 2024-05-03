import React from 'react';
import estrelaAmarela from '../../assets/Star_fill.svg';
import estrelaCinza from '../../assets/Star.svg';
import './CardItens.css';

const CoffeeCard = ({ coffee }) => {
  return (
    <div className="coffee-card">
      <div className="foto-cafe">
        <img src={coffee.image} alt={coffee.name} />
      </div>
      <div className="selo-popular">
        {coffee.popular ? <p>Popular</p> : ''}
      </div>
      <div className="info-cafe">
        <h2>{coffee.name}</h2>
        <p>{coffee.price}</p>
      </div>
      <div className="rating">
        {coffee.rating ? (
          <div className='avaliacao'>
            <img src={estrelaAmarela} alt="" srcSet="" />
            <p className='estilo-rating'>{coffee.rating}<span className='estilo-votes'> ({coffee.votes} votes) </span></p>
          </div>
        ) : (
          <div className='estilo-no-rating'>
            <img src={estrelaCinza} alt="" srcSet="" />
            <p className='no-rating'>No ratings</p>
          </div>
        )}
        {!coffee.available && <p className='sold-out'>Sold out</p>}
      </div>
    </div>
  );
};

export default CoffeeCard;
