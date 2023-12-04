import React from 'react';
import PricingBox from './PricingBox';

const LogoPricing = () => {
  return (
    <div>
      <div className='grid grid-cols-3 max-sm:grid-cols-1'>
        <PricingBox 
          name="Basic"
          item1="2 Original Logo Concepts"
          item2="2 Revisions"
          item3="2 Dedicated Logo Designer (Industry Specific)"
          item4="With Gray Scale Format"
          item5="Free Icon Design"
          item6="Formats: JPEG & PNG only"
          item7="Dedicated Accounts Manager"
          item8="100% Ownership Rights"
          price="50"
        />
        <PricingBox 
          name="Standard"
          item1="12 Original Logo Concepts"
          item2="Unlimited Revisions"
          item3="4 Dedicated Logo Designer"
          item4="Stationery Designs"
          item5="Email Signature Design"
          item6="With Gray Scale Format"
          item7="Free Icon Design"
          item8="Formats: JPEG, PSD, EPS, AI, PNG, TIFF, SVG"
          item9="Dedicated Accounts Manager"
          item10="100% Ownership Rights"
          price="150"
        />
        <PricingBox 
          name="Premium"
          item1="Unlimited Original Logo Concepts"
          item2="Unlimited Revisions"
          item3="8 Dedicated Logo Designer"
          item4="Stationery Designs"
          item5="T-shirt Design"
          item6="Merchandise Design (2 items of your choice)"
          item7="5 second Logo Animation"
          item8="Email Signature Design"
          item9="With Gray Scale Format"
          item10="Free Icon Design"
          item11="Formats: JPEG, PSD, EPS, AI, PNG, TIFF, SVG"
          item12="Dedicated Accounts Manager"
          item13="100% Ownership Rights"
          price="350"
        />
      </div>
    </div>
  );
}

export default LogoPricing;