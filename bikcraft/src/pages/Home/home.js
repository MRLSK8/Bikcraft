import React from 'react';
import Introduction from './Introduction/introduction';
import Products from './Products/product';
import Portfolio from './Portfolio/portfolio';

export default function Home() {
  return (
    <>
      <Introduction />
      <Products />
      <Portfolio />
    </>
  );
}
