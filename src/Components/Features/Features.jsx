import React from 'react'
import './Features.css'
import Cards from '../Cards/Cards'
function Features() {
  return (
    <div className='container-fluid bg-secondary-subtle'>
      <div className="row  ">
        <div className="col-12 ">
          <div className="row ">
            <div className="col-12">
              <div>
                <h1 className='text-center'>Features</h1>
              </div>
            </div>
          </div>
          <div className="col-12 container-lg mt-5  text-center">
            <div className="row d-flex justify-content-center">
              <div className="col-12 col-sm-6 col-lg-4 ">
                {<Cards/>}
              </div>
              <div className="col-12 col-sm-6 col-lg-4 ">
                {<Cards/>}
              </div>
              <div className="col-12 col-sm-6 col-lg-4 ">
                {<Cards/>}
              </div>
              <div className="col-12 col-sm-6 col-lg-4 ">
                {<Cards/>}
              </div>
              <div className="col-12 col-sm-6 col-lg-4 ">
                {<Cards/>}
              </div>
              <div className="col-12 col-sm-6 col-lg-4 ">
                {<Cards/>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features