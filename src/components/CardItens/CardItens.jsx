import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
                {coffee.popular && <p>Popular</p>}
            </div>
            <div className="info-cafe">
                <h2>{coffee.name}</h2>
                <p>{coffee.price}</p>
            </div>
            <div className="rating">
                {coffee.rating ? (
                    <div className='avaliacao'>
                        <img src={estrelaAmarela} alt="" />
                        <p className='estilo-rating'>{coffee.rating}<span className='estilo-votes'> ({coffee.votes} votes) </span></p>
                    </div>
                ) : (
                    <div className='estilo-no-rating'>
                        <img src={estrelaCinza} alt="" />
                        <p className='no-rating'>No ratings</p>
                    </div>
                )}
                {!coffee.available && <p className='sold-out'>Sold out</p>}
            </div>
        </div>
    );
};

const CardItens = ({ showAvailable }) => {
    const [coffees, setCoffees] = useState([]);

    useEffect(() => {
        axios.get('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json')
            .then(response => {
                let filteredCoffees = response.data;
                if (showAvailable) {
                    filteredCoffees = filteredCoffees.filter(coffee => coffee.available);
                }
                setCoffees(filteredCoffees);
            })
            .catch(error => {
                console.error('Error fetching coffees:', error);
            });
    }, [showAvailable]);

    return (
        <div className="app">
            <div className="coffee-list">
                {coffees.map(coffee => (
                    <CoffeeCard key={coffee.id} coffee={coffee} />
                ))}
            </div>
        </div>
    );
};

export default CardItens;
