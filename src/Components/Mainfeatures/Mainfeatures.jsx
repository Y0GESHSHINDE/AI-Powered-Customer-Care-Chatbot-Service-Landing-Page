import React from 'react';
import Footer from '../Footer/Footer';

const featuresData = [
   {
      title: 'Instant Responses',
      description: 'Provide quick answers to common customer queries, reducing wait times and improving user satisfaction.',
   },
   {
      title: 'FAQ Automation',
      description: 'Automate responses to frequently asked questions, helping customers get the information they need without human intervention.',
   },
   {
      title: 'Live Chat Integration',
      description: 'Integrate seamlessly with existing live chat systems to provide a smooth transition from chatbot to human agents when needed.',
   },
   {
      title: 'Easy Setup',
      description: 'Set up the chatbot in minutes with user-friendly installation, requiring no technical skills or coding knowledge.',
   },
   {
      title: 'Multi-Platform Support',
      description: 'Available on your website, mobile app, or social media channels, ensuring customers can reach you wherever they are.',
   },
   {
      title: 'User-Friendly Interface',
      description: 'Intuitive chat interface that’s easy for customers to use, making interactions simple and straightforward.',
   },
   {
      title: 'Data Collection',
      description: 'Collect customer data during conversations to help you understand their needs and preferences for better service.',
   },
   {
      title: 'Personalized Greetings',
      description: 'Greet returning customers by name and offer personalized messages based on their previous interactions.',
   },
   {
      title: 'Typing Indicator',
      description: 'Let users know when the chatbot is preparing a response, making the conversation feel more natural and engaging.',
   },
   {
      title: 'Offline Support',
      description: 'Allow customers to leave messages when your team is offline, ensuring no query goes unanswered.',
   },
];

const MainFeatures = () => {
   return (
      <>
         <div className="container my-5">
            <h2 className="text-center mb-4">Chatbot Features</h2>
            <div className="row d-flex justify-content-center">
               {
                  featuresData.map((feature, index) => (
                     <div key={index} className='col-12 col-lg-4 mb-5   '>
                        <div className="card text-center h-100 shadow-sm border-0">
                           <div className="card-body bg-info ">
                              <h5>{feature.title}</h5>
                              <p>{feature.description}</p>
                           </div>
                        </div>
                     </div>
                  ))
               }
            </div>
         </div>
         <Footer />
      </>
   );
};

export default MainFeatures;
