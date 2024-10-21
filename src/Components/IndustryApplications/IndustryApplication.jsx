import React from 'react'
import './application.css'
import { Link } from 'react-router-dom'

function IndustryApplication() {
  let application = [
    {
      industry: 'E-commerce and Retail',
      useCase: 'Automating customer support for order tracking, product inquiries, returns, and refunds.',
      benefit: 'Enhances the shopping experience by providing instant answers and reducing cart abandonment rates.',
    },
    {
      industry: 'Healthcare',
      useCase: 'Providing appointment scheduling, medication reminders, and answering health-related queries.',
      benefit: 'Streamlines patient communication and improves accessibility to healthcare services, even during off-hours.',
    },
    {
      industry: 'Banking and Finance',
      useCase: 'Assisting customers with account inquiries, transaction details, and fraud alerts.',
      benefit: 'Increases security and efficiency in handling sensitive customer data while reducing wait times.',
    },
    {
      industry: 'Travel and Hospitality',
      useCase: 'Helping customers with booking management, travel recommendations, and itinerary updates.',
      benefit: 'Provides 24/7 customer service, improving the travel experience by reducing the need for human intervention.',
    },
    {
      industry: 'Telecommunications',
      useCase: 'Managing customer queries about network issues, service plans, and billing support.',
      benefit: 'Reduces call center load by handling routine inquiries through automated responses.',
    },
    {
      industry: 'Real Estate',
      useCase: 'Assisting potential buyers with property searches, scheduling viewings, and providing market trends.',
      benefit: 'Speeds up the buying or renting process with personalized recommendations and instant communication.',
    },
    {
      industry: 'Education',
      useCase: 'Answering student inquiries about courses, registration, deadlines, and virtual learning assistance.',
      benefit: 'Enhances student engagement by providing quick access to educational resources and personalized study help.',
    },
    {
      industry: 'Insurance',
      useCase: 'Assisting customers with policy information, claim filing, and renewal reminders.',
      benefit: 'Reduces processing times and improves customer satisfaction by automating repetitive tasks.',
    },

  ]
  return (
    <div id='applicationcontainer'>
      {
        <div className="container  text-center" >
          <h1 style={{ fontWeight: 700 }}>Industry application</h1>
          <div className="row d-flex justify-content-center">
            {
              application.map((index, key) => (
                <div key={key} className='col-12 col-lg-4 mb-3 mt-5  text-center ' >
                  <div className='card' id='cardsH'>
                    <div className='card-body'>
                      <div>
                        <h4>{index.industry}</h4>
                      </div>
                      <div>
                        <p>{index.useCase}</p>
                      </div>
                      <div>
                        <p>{index.benefit}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      }
    </div>
  )
}

export default IndustryApplication;