import React, { useState, useRef } from 'react';
import '../components/Navbar.jsx';
import Navbar from '../components/Navbar.jsx';
import Type from '../components/Type.jsx';
import './style.css';
import API from '../API';
import CanvasDraw from 'react-canvas-draw';

const CreatePokemon = () => {
  const [currentColor, setCurrentColor] = useState('#000000');
  const currentCanvas = useRef();

  const createPokemon = async (e) => {
    e.preventDefault();
    const req = e.target;

    const unfilteredMoves = [
      {
        "name": req.move1.value,
        "type": req.move1type.value,
        "power": req.move1power.value,
      },
      {
        "name": req.move2.value,
        "type": req.move2type.value,
        "power": req.move2power.value,
      },
      {
        "name": req.move3.value,
        "type": req.move3type.value,
        "power": req.move3power.value,
      },
      {
        "name": req.move4.value,
        "type": req.move4type.value,
        "power": req.move4power.value,
      }
    ];

    const validMoves = unfilteredMoves.filter((move) => {
      return move.name.length > 0 && move.type.length > 0;
    });

    const payload = {
      "name": req.name.value,
      "image": currentCanvas.current.getSaveData(),
      "description": req.desc.value,
      "type1": req.type1.value,
      "type2": req.type2.value,
      "moves": validMoves
    }
    console.log(JSON.stringify(payload));
    await API.createPokemon(payload);
    alert('Created Successfully');
  }

  const colorChange = (e) => {
    e.preventDefault();
    setCurrentColor(e.target.value);
  }

  const undoCanvas = (e) => {
    e.preventDefault();
    currentCanvas.current.undo();
  }

  const clearCanvas = (e) => {
    e.preventDefault();
    currentCanvas.current.clear();
  }

  return (
    <div>
      <Navbar/>
      <form onSubmit={createPokemon} className='create-page'>
        <div className='drawing'>
          <h2>Draw your Pokemon here!</h2>
          <div className='canvas'>
            <CanvasDraw
              ref={currentCanvas}
              hideGrid={true}
              hideInterface={true}
              brushRadius={5}
              lazyRadius={0}
              brushColor={currentColor}
              canvasWidth={500}
              canvasHeight={500}
            />
          </div>
          <div className='canvas-options'>
            <div className='color-picker'>
              <label htmlFor='color-picker'>Pick a color: </label>
              <input onChange={colorChange} type='color' name='color-picker' />
            </div>
            <button onClick={undoCanvas}>Undo</button>
            <button onClick={clearCanvas}>Clear</button>
          </div>
        </div>
        <div className='pokemon-form'>
          <h2>Create a Pokemon</h2>
          <div className='form-row'>
            <label htmlFor='name'>Name</label>
            <input id='name' name='name' required></input>
            {/* <button>Generate Random Name</button> */}
          </div>
          <div className='form-row'>
            <label htmlFor='description'>Description</label>
            <input id='desc' name='desc' required/>
          </div>
          <div className='form-row'>
            <label htmlFor='type1'>Type 1</label>
            <Type id="type1"/>
          </div>
          <div className='form-row'>
            <label htmlFor='type2'>Optional Type 2</label>
            <Type id="type2"/>
          </div>
          <div className='form-row'>
            <label htmlFor='move1'>Move 1</label>
            <input id='move1' name='move1' required/>
            <label htmlFor='move1type'>Type</label>
            <Type id='move1type'/>
            <label htmlFor='move1power'>Power</label>
            <input type='number' id='move1power' name='move1power'
            min='0' max='100' defaultValue='0'/>
          </div>
          <div className='form-row'>
            <label htmlFor='move2'>Move 2</label>
            <input id='move2' name='move2'/>
            <label htmlFor='move2type'>Type</label>
            <Type id='move2type'/>
            <label htmlFor='move2power'>Power</label>
            <input type='number' id='move2power' name='move2power'
            min='0' max='100' defaultValue='0'/>
          </div>
          <div className='form-row'>
            <label htmlFor='move3'>Move 3</label>
            <input id='move3' name='move3'/>
            <label htmlFor='move3type'>Type</label>
            <Type id='move3type'/>
            <label htmlFor='move3power'>Power</label>
            <input type='number' id='move3power' name='move3power'
            min='0' max='100' defaultValue='0'/>
          </div>
          <div className='form-row'>
            <label htmlFor='move4'>Move 4</label>
            <input id='move4' name='move4'/>
            <label htmlFor='move4type'>Type</label>
            <Type id='move4type'/>
            <label htmlFor='move4power'>Power</label>
            <input type='number' id='move4power' name='move4power'
            min='0' max='100' defaultValue='0'/>
          </div>
          <input type='submit' value='Submit'/>
        </div>
      </form>
    </div>
  );
}

export default CreatePokemon;