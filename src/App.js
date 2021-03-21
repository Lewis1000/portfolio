import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="animated-bg">
      <Router>
        <Navigation />
          <Switch>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route path="/">
              <Portfolio />
            </Route>
          </Switch>
      </Router>
    </div>
  );
};

export default App;
