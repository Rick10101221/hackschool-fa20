import React from 'react';
import './style.css';

export default function PokemonCard({ name, description, image, type1, type2 }) {
  return (
    <div className='pokemon-card-container'>
      <div className='pokemon-card-container-inner'>
        <div className='pokemoncard-data-container'>
          <p className='pokemoncard-name'>
            {name}
          </p>

          <p className='pokemoncard-description'>
            {description}
          </p>

          <p className='pokemoncard-types'>
            <span className='pokemon-type-1' style={{ color: '#000'}}>
              {type1}
            </span>
          </p>

          <p className='pokemoncard-types'>
            <span className='pokemon-type-2' style={{ color: '#000'}}>
              {type2}
            </span>
          </p>
        </div>
      </div>
      {/* <h2>{name}</h2>
      <img 
        src={image} 
        alt={name}
      />
      <p>{description}</p> */}
    </div>
  );
}