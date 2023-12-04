import React from 'react';
import PricingBox from './PricingBox';

const AppPricing = () => {
  return (
    <div>
      <div className='grid grid-cols-3 max-sm:grid-cols-1'>
        <PricingBox 
          name="Basic"
          item1="50% Upfront to get started with the work immediately"
          item2="No. of Features Up to 7"
          item3="Wireframing"
          item4="Intuitive UI UX"
          item5="Social Media Integration"
          item6="App Testing"
          item7="Publishing on App Store "
          item8="Paid bug support ($350/m)"
          item9="Native iOS OR Android app"
          price="2560"
        />
        <PricingBox 
          name="Standard"
          item1="50% Upfront to get started with the work immediately"
          item2="No. of Features Up to 10"
          item3="Wireframing"
          item4="Intuitive UI UX "
          item5="CMS / Admin Panel Support"
          item6="Social Media Integration"
          item7="App Testing"
          item8="Ads Network Integration"
          item9="Firebase Integration"
          item10="Publishing on App Store"
          item11="1 Month free bug support"
          item12="Native iOS OR Android app"
          item13="Complete W3C Certified HTML"
          item14="Cross-Platform (Hybrid) On Demand"
          item15="Dedicated Accounts Manager"
          item16="Push Notifications"
          item17="Messaging API Integration (Live Chat)"
          item18="Google Maps Integration"
          item19="Web APIs and Online Database"
          item20="CrashAnalytics Integration"
          price="4160"
        />
        <PricingBox 
          name="Premium"
          item1="25% Upfront to get started with the work immediately"
          item2="No. of Features Up to 25"
          item3="Wireframing"
          item4="Intuitive UI UX (Custom App Design)"
          item5="Social Media Integration"
          item6="App Testing"
          item7="Ads Network Integration"
          item8="Free Google Friendly Sitemap"
          item9="Firebase Integration"
          item10="In-App Purchase"
          item11="Publishing on App Store"
          item12="App Store Optimization"
          item13="3 Month free bug support"
          item14="Native iOS OR Android app"
          item15="Cross-Platform (Hybrid) On Demand"
          item16="Messaging API Integration (Live Chat)"
          item17="Regular App Updates Yearly 1 Update"
          item18="Google Maps Integration"
          item19="Admin Panel"
          item20="Data Import/Export"
          item21="Web APIs and Online Database"
          item22="Product Categories/Sub Categories"
          item23="Crash Analytics Integration"
          item24="Audio/Video Streaming"
          item25="Payment Gateways Integration"
          item26="Shopping Cart"
          price="10,000"
        />
      </div>
    </div>
  );
}

export default AppPricing;