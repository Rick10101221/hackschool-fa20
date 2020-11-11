import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import CreatePokemon from './pages/CreatePokemon';
import ViewPokemon from './pages/ViewPokemon';

function App() {
  return (
    <Router>
      <Switch>
        <Redirect from='/' to='/create' exact />
        <Route exact path='/create' component={CreatePokemon} />
        <Route exact path='/view' component={ViewPokemon} />
      </Switch>
    </Router>
  );
}

export default App;
