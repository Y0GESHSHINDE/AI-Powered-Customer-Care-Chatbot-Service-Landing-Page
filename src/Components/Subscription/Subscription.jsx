import React from 'react';
import './subscription.css';
import Footer from '../Footer/Footer';

function Subscription() {
   const pricingPlans = [
      {
         plan: 'Basic Plan',
         price: '$19/month',
         interactions: 'Up to 500/month',
         analytics: 'Basic Analytics',
         support: 'Email Support',
         integrations: 'None',
         nlpFeatures: 'Basic NLP Capabilities',
         features: [
            'Up to 500 chatbot interactions per month',
            'Basic analytics dashboard',
            'Email support for troubleshooting',
         ],
      },
      {
         plan: 'Standard Plan',
         price: '$49/month',
         interactions: 'Up to 2,000/month',
         analytics: 'Advanced Analytics',
         support: 'Email & Chat Support',
         integrations: 'Integrate with 3 platforms',
         nlpFeatures: 'Advanced NLP Capabilities',
         features: [
            'Up to 2,000 chatbot interactions per month',
            'Advanced analytics with customer insights',
            'Integration with popular platforms (e.g., Slack, Shopify, Facebook Messenger)',
            'Email & chat support for immediate assistance',
         ],
      },
      {
         plan: 'Premium Plan',
         price: '$99/month',
         interactions: 'Unlimited',
         analytics: 'Full Analytics Suite',
         support: 'Priority Support',
         integrations: 'Custom Integrations',
         nlpFeatures: 'Full NLP Capabilities',
         features: [
            'Unlimited chatbot interactions',
            'Full analytics suite with custom reports',
            'Priority support with dedicated account manager',
            'Custom integrations tailored to your business needs',
         ],
      },
   ];

   return (
      <>
      <div className='container-fluid' id='priceBox'>
         <div className='container text-center'>
            <div className="row d-flex justify-content-center ">
               {pricingPlans.map((plan, index) => (
                  <div className=' col-12 col-sm-12 col-lg-5 mb-2 mt-2'>
                     <div key={index} className='card'>
                        <div className='card-body'>
                           <h1 style={{ fontWeight: 800 }}>{plan.plan}</h1>
                           <p>{plan.price}</p>
                           <p>{plan.interactions}interactions</p>
                           <p>{plan.analytics}</p>
                           <p>{plan.support}</p>
                           <p>{plan.integrations}</p>
                           <p>{plan.nlpFeatures}</p>
                           <button className='btn btn-outline-secondary'>buy {plan.plan}</button>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
      <Footer/>
      </>
   );
}

export default Subscription;
