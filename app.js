import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Header';
import HeroSection from './HeroSection';
import DestinationsSection from './DestinationsSection';
import ContactForm from './ContactForm';
import Footer from './Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <HeroSection />
          <DestinationsSection />
        </Route>
        <Route path="/contact">
          <ContactForm />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;