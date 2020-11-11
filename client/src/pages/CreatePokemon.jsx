import '../components/Navbar.jsx';
import Navbar from '../components/Navbar.jsx';
import Type from '../components/Type.jsx';
import './style.css';

const CreatePokemon = () => {
  return (
    <div>
      <Navbar/>
      <form class='create-page'>
            <div class='pokemon-form'>
                <h2>Create a Pokemon</h2>
                <div class='form-row'>
                    <label for='name'>Name</label>
                    <input id='name' name='name' required></input>
                    <button>Generate Random Name</button>
                </div>
                <div class='form-row'>
                    <label for='description'>Description</label>
                    <input id='desc' name='desc' required/>
                </div>
                <div class='form-row'>
                    <label for='type1'>Type 1</label>
                    <Type id="type1"/>
                </div>
                <div class='form-row'>
                    <label for='type2'>Optional Type 2</label>
                    <Type id="type2"/>
                </div>
                <div class='form-row'>
                    <label for='move1'>Move 1</label>
                    <input id='move1' name='move1' required/>
                    <label for='move1'>Type</label>
                    <Type id='move1'/>
                    <label for='move1power'>Power</label>
                    <input type='number' id='move1power' name='move1power'
                    min='0' max='100' value='0'/>
                </div>
                <div class='form-row'>
                    <label for='move2'>Move 2</label>
                    <input id='move2' name='move2'/>
                    <label for='move2'>Type</label>
                    <Type id='move2'/>
                    <label for='move2power'>Power</label>
                    <input type='number' id='move2power' name='move2power'
                    min='0' max='100' value='0'/>
                </div>
                <div class='form-row'>
                    <label for='move3'>Move 3</label>
                    <input id='move3' name='move3'/>
                    <label for='move3'>Type</label>
                    <Type id='move3'/>
                    <label for='move3power'>Power</label>
                    <input type='number' id='move3power' name='move3power'
                    min='0' max='100' value='0'/>
                </div>
                <div class='form-row'>
                    <label for='move4'>Move 4</label>
                    <input id='move4' name='move4'/>
                    <label for='move4'>Type</label>
                    <Type id='move4'/>
                    <label for='move4power'>Power</label>
                    <input type='number' id='move4power' name='move4power'
                    min='0' max='100' value='0'/>
                </div>
                <input type='submit' value='Submit'/>
            </div>
        </form>
    </div>
  );
}

export default CreatePokemon;