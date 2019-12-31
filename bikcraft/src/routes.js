import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home/home';
import Portfolio from './pages/Portfolio/portfolio';
import Contact from './pages/Contact/contact';
import Product from './pages/Product/product';
import About from './pages/About/about';
import Header from './pages/Header/header';
import Footer from './pages/Footer/footer';

export default function Routes() {
  return (
    <BrowserRouter>
        <Route path="/" component={Header}/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about-us" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/product" component={Product} />
        </Switch>
        <Route path="/" component={Footer}/>
    </BrowserRouter>
  );
}
