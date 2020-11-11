import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import './style.css';

const ViewPokemon = () => {
    return (
        <div>
          <Navbar />
          <button>Log Pokemon</button>
          <div className="pokemon">
            <h2>Pikachu</h2>
            <img 
              src='https://media1.tenor.com/images/fb21c5a0ff18e29aab890d1d1f6d6e64/tenor.gif?itemid=15357817' 
              alt='this is supposed to be pikachu'
            />
            <p>This is Pikachu</p>

            <h2>Raichu</h2>
            <img 
              src='https://i.pinimg.com/originals/c0/5c/0e/c05c0ef2b427d661fd1c4efb4142b6c1.gif' 
              alt='this is supposed to be raichu'
            />
            <p>This is Raichu</p>

            <h2>Pichu</h2>
            <img 
              src='https://media1.tenor.com/images/abd1e656a8f0b066d3d8060b1945409c/tenor.gif?itemid=8748041' 
              alt='this is supposed to be pichu'
            />
            <p>This is Pichu</p>
          </div>
        </div>
    );
}

export default ViewPokemon;