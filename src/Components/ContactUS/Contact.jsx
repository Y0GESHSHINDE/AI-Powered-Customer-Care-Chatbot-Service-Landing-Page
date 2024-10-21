import React from 'react'

function Contact() {
   let Done = ()=>{
      if (!formData.name || !formData.mobile || !formData.email || !formData.message) {
         alert("Please fill out all fields.");
         return; 
      }
      alert("Your Response is Recoeded Our Team will Conatct you Shortly");
   }
   return (
      <div className='Conatiner-fluid  bg-light ' style={{height:"100vh"}}>
         <div className="row d-flex justify-content-center">
            <div className="col-12 mt-5">
               <div className="row d-flex justify-content-center">
                  <div className="col-10 col-sm-6 col-lg-4">
                     
                     <div class="card text-center mt-5">
                        <div className="card-body ">
                        <h3>Contact us</h3>
                           <form action="" >
                              <input type="text" className='form-control mt-2' name="" id="" placeholder='Name' required/>

                              <input type="tel" className='form-control mt-2' name="" id="" placeholder='Mobile Number' required/>

                              <input type="text" className='form-control mt-2' name="" id="" placeholder='Name'required />

                              <textarea type="text" className='form-control mt-2' name="" id="" placeholder='Your message'required />

                              <button className='btn btn-outline-secondary  mt-2' onClick={Done} > send</button>

                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Contact