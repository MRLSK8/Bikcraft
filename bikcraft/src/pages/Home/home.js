import React from 'react';

import Introduction from './Introduction/introduction';
import Products from './Products/product';
import Portfolio from './Portfolio/portfolio';
import Quality from './Qualities/quality';
import Quote from './Quote/quote';

export default function Home() {
  return (
    <>
      <Introduction />
      <Products />
      <Portfolio />
      <Quality />
      <Quote />
    </>
  );
}
