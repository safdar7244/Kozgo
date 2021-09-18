import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
function RideWithUs() {
 return (
  <div className="ride-with-us">
   <Navbar/>
   <div className="bg">
   <div className="text">    
   <h1>Let us take you <b>anywhere </b> in the <b>city</b></h1>
   </div>

   </div>
     <div className="mid-section">

    <div className="purple1">
    <div className="p1">
     <p>We have the lowest fares on the market without <b>sacrificing safety </b> and <b>pofessionalism</b>. </p>
     </div>
    </div>

    <div className="white">
      <div className="p2">
       <p>We're already saving you money. Let's save you some time. Take your smartphone out and <b>Book a ride.</b> It's that simple. </p>
      </div>
    </div>

   </div>
   <Footer></Footer>
  </div>
 )
}

export default RideWithUs
