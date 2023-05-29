import React from 'react';
import MainFeature from '../components/atoms/MainFeature';
import SideFeature from './atoms/SideFeature';

export default function Feature({ items }) {
  const features = [...items];
  const mainFeature = features[0];
  features.shift();
  const sideFeatures = features;

  return (
    <div className="flex lg:grid grid-cols-12 lg:gap-10 flex-col lg:flex-row bg-transparent lg:bg-tertiary lg:shadow-md mx-auto mt-[2rem] max-w-4xl w-full lg:max-w-[1280px] px-8 lg:py-8">
      <MainFeature mainFeature={mainFeature} />
      <div className="col-start-5 col-span-8 flex flex-col h-full justify-between gap-y-6">
        {sideFeatures.map((feature, index) => (
          <SideFeature feature={feature} key={index} />
        ))}
      </div>
    </div>
  );
}
