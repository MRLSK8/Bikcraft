import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home/home';
import Portfolio from './pages/Portfolio/portfolio';
import Contact from './pages/Contact/contact';
import Product from './pages/Product/product';
import About from './pages/About/about';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/product" component={Product} />
      </Switch>
    </BrowserRouter>
  );
}
