import React from 'react';

import Introduction from './Introduction/introduction';
import Products from './ProductsPhotos/products';
import Orcamento from './formOrcamento/formOrcamento';
import Quote from '../Home/Quote/quote';

export default function Product() {
  return (
    <>
      <Introduction />
      <Products/>
      <Orcamento />
      <Quote />
    </>
  );
}
