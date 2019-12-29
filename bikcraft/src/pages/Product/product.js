import React from 'react';
import Quote from '../Home/Quote/quote';
import Introduction from './Introduction/introduction';
import Products from './ProductsPhotos/products';

export default function Product() {
  return (
    <>
      <Introduction />
      <Products/>
      <Quote />
    </>
  );
}
