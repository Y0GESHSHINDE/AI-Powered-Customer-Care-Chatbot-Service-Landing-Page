import React from 'react'
import './HeroSection.css'
function HeroSection() {
   return (
      <div className='container-fluid bg-info-subtle' id='Divok'>
         <div className="row">
            <div className="col-12 ">
               <div className="row text-center  d-flex justify-content-center align-items-center">
                  <div className="col-12 col-sm-6 col-lg-5 col-xl-4 col-xxl-4 mt-5 text-center">
                     <img className='img-fluid' src="/src/assets/ChatBotdemo.png" alt="" id='demoimg' />
                  </div>
                  <div className="col-12 col-sm-6 col-lg-5 col-xl-4 col-xxl-4 mt-sm-5"  >
                     <h1 className=' m-5 mb-0' id='HeroHeding' >Revolutionize Customer Service with Intelligent Chatbots</h1>
                     <div>
                        <button className='btn btn-outline-info '>Features </button>
                     </div>

                     <div className='mt-2'>
                        <button className='btn btn-outline-info  '>Industry Applications </button>
                     </div>

                  </div>
               </div>
            </div>
            <div className="col-12 text-center mt-2 mt-sm-2 mt-lg-5 mb-5 ">
               <div className="row d-flex justify-content-center ">
                  <div className="col-7 bg-info p-2  rounded-5">
                     <h3 >Transform how you interact with your customers using our AI-driven chatbot solution</h3>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default HeroSection