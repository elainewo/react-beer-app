
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/pages/Home';
import AllBeers from './components/AllBeers';
import RandomBeer from './components/RandomBeer';
import Details from './components/Details';
import homeLogo from './img/home-logo.png';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/allbeers" component={AllBeers}>
        </Route>
        <Route path="/details/:id" component={Details}>
        </Route>
        <Route path="/randombeer">
          < RandomBeer />
        </Route>
      </Switch>
      <nav>
        <ul>
          <li>
            <Link className="home-btn" to="/">
              <img src={homeLogo} alt="" />
            </Link>
          </li>
        </ul>
      </nav>
    </Router >
  );
}

export default App;
