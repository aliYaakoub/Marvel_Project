import React from 'react';
import './App.css';
import { Route, Switch, Redirect} from 'react-router-dom';
import Home from './components/Home';
import ComicGridFull from './components/ComicsGrid';
import CharacterPage from './components/character page/CharacterPage';
import EventsGrid from './components/EventsGrid';

//95e95c40e973659f8d7dceea370df138;

function App() {

    return (
      <div>
        <Switch>
          <Route path='/home' component={Home} exact />
          <Route path='/character/:id' component={CharacterPage} />
          <Route path='/characterComics/:id' component={ComicGridFull} />
          <Route path='/characterEvents/:id' component={EventsGrid} />
          <Redirect from='/' to='/home' />
        </Switch>
      </div>
    );
}

export default App;
