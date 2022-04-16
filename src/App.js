import React from 'react';

import { Footer, Blog, Possibility, Features, Trefoil, Header } from './containers';
import { Cta, Brand, Navbar } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <Trefoil />
    <Features />
    <Possibility />
    <Cta />
    <Blog />
    <Footer />
  </div>
);

export default App;
