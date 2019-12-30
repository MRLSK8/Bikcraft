import React from 'react';

import Quote from '../Home/Quote/quote';
import Introduction from './Introduction/introduction';
import Citacao from './Citacao/citacao';
import PortfolioImages from './PortfolioImages/portfolioImages';

export default function Portfolio() {
  return (
    <>
      <Introduction />
      <Citacao />
      <PortfolioImages />
      <Quote />
    </>
  );
}
