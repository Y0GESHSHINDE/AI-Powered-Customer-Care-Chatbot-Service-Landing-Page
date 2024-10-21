import React from 'react'
import './Features.css'
import Cards from '../Cards/Cards'
function Features() {
  return (
    <div className='container-fluid bg '>
      <div className="row  ">
        <div className="col-12 ">
          <div className="row ">
            <div className="col-12">
              <div>
                <h1 className='text-center' style={{fontWeight:700}}>Features</h1>
              </div>
            </div>
          </div>
          <div className="col-12 container-lg mt-5  text-center">
            <div className="row d-flex justify-content-center">
              <div className="col-12 col-sm-6 col-lg-4 ">
                {<Cards title="Instant Responses" />}
              </div>
              <div className="col-12 col-sm-6 col-lg-4 ">
                {<Cards title="FAQ Automation" />}
              </div>
              <div className="col-12 col-sm-6 col-lg-4 ">
                {<Cards title="Live Chat Integration" />}
              </div>
              <div className="col-12 col-sm-6 col-lg-4 ">
                {<Cards title="User-Friendly Interface" />}
              </div>


              <div className="col-12 col-sm-6 col-lg-4 ">
                {<Cards title="24/7 Customer Support" />}
              </div>
              <div className="col-12 col-sm-6 col-lg-4 ">
                {<Cards title="Multilingual Support" />}
              </div>
              <div className="col-12 col-sm-6 col-lg-4 ">
                {<Cards title="AI-Driven Learning" />}
              </div>
              <div className="col-12 col-sm-6 col-lg-4 ">
                {<Cards title="Lead Generation" />}
              </div>
              <div className="col-12 col-sm-6 col-lg-4 ">
                {<Cards title="Contextual Conversations" />}
              </div>
              <div className="col-12 col-sm-6 col-lg-4 ">
                {<Cards title="Easy Setup and Deployment" />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features