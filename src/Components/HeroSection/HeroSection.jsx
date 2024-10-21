import React from 'react'
import './HeroSection.css'
import { Link } from 'react-router-dom'
import { Button } from 'react-scroll';
function HeroSection() {
   return (
      <div className='container-fluid ' id='Divok'>
         <div className="row">
            <div className="col-12 ">
               <div className="row text-center  d-flex justify-content-center align-items-center">
                  <div className="col-12 col-sm-6 col-lg-5 col-xl-4 col-xxl-4 mt-5 text-center">
                     <img className='img-fluid' src="https://res.cloudinary.com/dn1j6dpd7/image/fetch/f_auto,q_auto,w_736/https://chatbot-blog.labs.livechat.com/app/uploads/2024/01/hero-widget_hu066a548761b839bd283907af2981ffef_494332_1908x0_resize_lanczos_3.png" alt="" id='demoimg' />
                  </div>
                  <div className="col-12 col-sm-6 col-lg-5 col-xl-4 col-xxl-4 mt-sm-5"  >
                     <h1 className=' m-5 mb-0' id='HeroHeding' >Revolutionize Customer Service with Intelligent Chatbots</h1>
                     <div>
                        <Link to={'/features'} className='btn btn-secondary fs-5'>Features </Link>
                     </div>
                     <div className='mt-2'>
                        <Link to={"/applications"}  className='btn btn-secondary fs-5 '>Industry Applications </Link>
                     </div>

                  </div>
               </div>
            </div>
            <div className="col-12 text-center mt-2 mt-sm-2 mt-lg-5 ">
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

export default HeroSection;
