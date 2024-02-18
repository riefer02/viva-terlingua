import React from 'react';
import MainFeature from '../components/MainFeature';
import SideFeature from './SideFeature';

export default function Feature({ items }) {
  const features = [...items];
  const mainFeature = features[0];
  features.shift();
  const sideFeatures = features;

  return (
    <div className="flex lg:grid grid-cols-12 lg:gap-4 flex-col lg:flex-row rounded-lg bg-transparent lg:bg-tertiary lg:shadow-md mx-auto w-full max-w-lg lg:max-w-6xl px-4 md:px-4 lg:py-4">
      <MainFeature mainFeature={mainFeature} />
      <div className="col-start-5 col-span-8 flex flex-col h-full justify-between gap-y-4">
        {sideFeatures.map((feature, index) => (
          <SideFeature feature={feature} key={index} />
        ))}
      </div>
    </div>
  );
}
