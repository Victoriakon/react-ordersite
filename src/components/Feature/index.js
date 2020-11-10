import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Wedding</h1>
      <p>Wedding hairstyles and make-up at home or to hotels</p>
      <FeatureButton>Choose the date</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;