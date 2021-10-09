import React from 'react';
import './App.css';
import { Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import ComicGrid from './components/ComicGrid';
import CharacterPage from './components/character page/CharacterPage';

//95e95c40e973659f8d7dceea370df138;

function App() {

    return (
      <div>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/character/:id' component={CharacterPage} />
          {/* <Route path='/characterComics/:id' component={ComicGrid} /> */}
        </Switch>
      </div>
    );
}

export default App;
