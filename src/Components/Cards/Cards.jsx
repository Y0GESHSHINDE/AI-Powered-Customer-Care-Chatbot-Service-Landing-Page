import React from 'react'
import './Cards.css'
import { Link } from 'react-router-dom'
function Cards(props) {
   return (
      <div className=" card  text-center cardBD  ">
         <div className="card-body">
            <h4 className='text-white'>{props.title}</h4>
            <Link to={'/features'} className='btn btn-outline-primary text-white '><i class='fa-solid fa-arrow-right'> </i></Link>
         </div>
      </div>

   )
}

export default Cards