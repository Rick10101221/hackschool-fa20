import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import API from '../API';
import PokemonCard from './PokemonCard/PokemonCard';
import './style.css';

const ViewPokemon = () => {
    const [body, setBody] = useState([]);

    useEffect(() => {
      API.getPokemon().then((response) => {
        setBody(response.data.pokemon);
      });
    }, []);

    const currentPokemon = body.map((val) => 
      <PokemonCard 
        name={val.name}
        description={val.description}
        image={val.image}
        type1={val.type1}
        type2={val.type2}
        moves={val.moves}
        key={val.image}
      />
    );

    const logPokemon = async () => {
      console.log(body);
    }

    return (
        <div>
          <Navbar />
          <button onClick={logPokemon}>Log Pokemon</button>
          <div className="pokemon">
            {currentPokemon}
          </div>
        </div>
    );
}

export default ViewPokemon;