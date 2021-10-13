import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home';
import ComicGridFull from './components/ComicsGrid';
import CharacterPage from './components/character page/CharacterPage';
import EventsGrid from './components/EventsGrid';
import SeriesGrid from './components/SeriesGrid';
import StoriesGrid from './components/StoriesGrid';

//95e95c40e973659f8d7dceea370df138;

function App() {

    return (
      <div>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/character/:id' component={CharacterPage} />
          <Route path='/characterComics/:id' component={ComicGridFull} />
          <Route path='/characterEvents/:id' component={EventsGrid} />
          <Route path='/characterSeries/:id' component={SeriesGrid} />
          <Route path='/characterStories/:id' component={StoriesGrid} />
          <Redirect to='/' />
        </Switch>
      </div>
    );
}

export default App;
