import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
function Navbar() {
   return (
      <nav class="navbar navbar-expand-lg  " id='NavbarDiv'>
         <div class="container-fluid" >
            <Link to={"/"} class="navbar-brand " href="#"><h3>NexBot</h3></Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
               <ul class="navbar-nav ms-auto mb-2 mb-lg-0  " id='NavbarSpace'>
                  <li class="nav-item">
                     <Link to={"/"} class="nav-link active boldText " aria-current="page" href="#">Home</Link>
                  </li>
                  <li class="nav-item">
                     <Link to={"/features"} class="nav-link active boldText " aria-current="page" href="#">Features</Link>
                  </li>
                  <li class="nav-item">
                     <Link to={"/subscription"} class="nav-link active boldText " aria-current="page" href="#">Subscription</Link>
                  </li>
                  <li class="nav-item">
                     <Link to={"/contact"} class="nav-link active boldText " aria-current="page" href="#">Contact us</Link>
                  </li>
               </ul>
            </div>
         </div>
      </nav>

   )
}

export default Navbar