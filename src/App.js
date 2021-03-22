import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import { HelmetProvider } from 'react-helmet-async';

const App = () => {
  return (
    <div className="animated-bg">
      <HelmetProvider>
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
      </HelmetProvider>
    </div>
  );
};

export default App;
