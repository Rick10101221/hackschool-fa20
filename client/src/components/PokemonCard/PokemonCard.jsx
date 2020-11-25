import React from 'react';
import './style.css';
import Move from '../Moves/index';
import CanvasDraw from 'react-canvas-draw';

export default function PokemonCard({ name, description, image, type1, type2, moves }) {
  const movesTable = moves.map((move, key) => {
    return <Move key={key} type={move.type} name={move.name} power={move.power} />
  })

  return (
    <div className='pokemon-card-container'>
      <div className='pokemon-card-container-inner'>
        <CanvasDraw 
          hideGrid={true}
          disabled={true}
          hideInterface={true}
          saveData={image}
        />
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
          <p className='pokemoncard-bold'>Moves:</p>
          <table className='moves-table'>
            <tbody>
              {movesTable}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}