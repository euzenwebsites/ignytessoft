import React from 'react';
import PricingBox from './PricingBox';

const WebsitePricing = () => {
  return (
    <div>
      <div className='grid grid-cols-3 max-sm:grid-cols-1'>
        <PricingBox 
          name="Basic"
          item1="Word press "
          item2="High End Design"
          item3="Custom UI/UX"
          item4="3 Page Website"
          item5="2 Stock Images"
          item6="1 jQuery Slider Banner"
          item7="Contact/Query Form"
          item8="Unlimited Revisions"
          item9="Complete W3C Certified HTML"
          item10="Complete Deployment"
          item11="Dedicated Accounts Manage"
          item12="100% Ownership Rights"
          item13="100% Satisfaction Guarantee"
          item14="100% Unique Design Guarantee"

          price="350"
        />
        <PricingBox 
          name="Standard"
          item1="Word press "
          item2="High End Design"
          item3="Custom UI/UX"
          item4="5 Page Website"
          item5="5 Stock Images"
          item6="3 Banner Design"
          item7="1 jQuery Slider Banner"
          item8="Free Google Friendly Sitemap"
          item9="Contact/Query FormL"
          item10="Unlimited Revisions"
          item11="Complete W3C Certified HTML"
          item12="Complete Deployment"
          item13="Dedicated Accounts Manager"
          item14="100% Ownership Rights"
          item15="100% Satisfaction Guarantee"
          item16="100% Unique Design Guarantee"
          price="550"
        />
        <PricingBox 
          name="Premium"
          item1="Word press "
          item2="High End Design"
          item3="Custom UI/UX"
          item4="10 Unique Page Website"
          item5="CMS / Admin Panel Support"
          item6="8 Stock Images"
          item7="5 Banner Designs "
          item8="Free Google Friendly Sitemap"
          item9="1 jQuery Slider Banner"
          item10="Free Google Friendly Sitemap"
          item11="Contact/Query Form"
          item12="Unlimited Revisions"
          item13="Complete W3C Certified HTML"
          item14="Complete Deployment"
          item15="Dedicated Accounts Manager"
          item16="100% Ownership Rights"
          item17="100% Satisfaction Guarantees"
          item18="100% Unique Design Guarantee"
          price="300"
        />
      </div>
    </div>
  );
}

export default WebsitePricing;