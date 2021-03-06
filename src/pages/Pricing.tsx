import React from 'react';
import PricingCard from '../components/PricingCard';
import PricingForm from '../components/PricingForm';

export default function Pricing() {
  return (
    <div className="bg-light-bg dark:bg-dark-frame-bg">
      <div className="flex flex-col justify-center items-center mx-auto">
        <h1 className="text-primary text-lg text-center w-3/4 my-3 md:text-4xl flex justify-center md:my-9 mx-auto">
          Let’s get started with the realistic management in ed-tech
        </h1>
        <h3 className="text-light-text dark:text-dark-text-fill text-sm text-center w-3/4 md:text-2xl flex justify-center">
          The purpose of this app is to make workplace management easier and
          come up with high throughput
        </h3>
        <div className="flex flex-wrap m-10">
          <PricingCard />
          <PricingCard />
          <PricingCard />
        </div>

        <div className="flex flex-col justify-center w-3/4">
          <PricingForm />
        </div>
      </div>
    </div>
  );
}
