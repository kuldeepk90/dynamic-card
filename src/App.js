

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const CardComponent = () => {
  const [data, setData] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20'
      );
      setData(response.data.results);
      setSelectedCard(response.data.results[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCardSelect = (card) => {
    setSelectedCard(card);
  };

  return (
    <div className='container' >
      {selectedCard && (
        <div className='display-card' style={{ backgroundColor: 'white' }}>
          {/* Display selected card */}
          <img src={selectedCard.picture.large} alt="Profile" />
          <div> <h2>{`${selectedCard.name.first} ${selectedCard.name.last}`}</h2>
         
          <p>{`${selectedCard.location.street.number},${selectedCard.location.city}, ${selectedCard.location.country}`}</p>
          <p><small>{selectedCard.gender}</small></p></div>
          
        </div>
      )}
      <div className='card-component'>
        {/* Display cards */}
        {data.map((card, index) => (
          <div
          className='card'
            key={index}
            onClick={() => handleCardSelect(card)}
            style={{
              backgroundColor: selectedCard === card ? 'hsl(271, 63%, 64%)' : 'transparent',
              cursor: 'pointer',
              
            }}
          >
             <small>{`${card.gender}`}</small>
            <h3>{`${card.name.first} ${card.name.last}`}</h3>
            <p>{card.email}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};


export default CardComponent;

