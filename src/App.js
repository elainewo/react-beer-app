
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/pages/Home';
import AllBeers from './components/pages/AllBeers';
import RandomBeer from './components/pages/RandomBeer';
import Details from './components/Details';
import SearchBeer from './components/pages/SearchBeer';
import BeerForm from './components/pages/BeerForm';


class App extends React.Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home}>
          </Route>
          <Route path="/allbeers" component={AllBeers}>
          </Route>
          <Route path="/details/:id" component={Details}>
          </Route>
          <Route path="/randombeer" component={RandomBeer}>
          </Route>
          <Route path="/searchbeer" component={SearchBeer}>
          </Route>
          <Route path="/beerform" component={BeerForm}>
          </Route>
        </Switch>
      </Router >
    );
  }
}

export default App;

