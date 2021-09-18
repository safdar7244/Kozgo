import React,{useContext} from 'react'
import Footer from "./Footer"
import Navbar from './Navbar'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import {AuthContext} from "../context/AuthContext"
import { NavLink,Link } from "react-router-dom";
function Home() {
  const authContext = useContext(AuthContext);
return (
  <div className="home">
  <Navbar/>
  <div className='main-section'>
    <div className="para-section">

    <div className="para">

    <h1>
      Let's get you to your <br></br>
    <b> destination, safer and </b> <br/>
    <b>sound </b>
    </h1>

    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta suscipit, saepe necessitatibus accusantium deserunt dolor ullam itaque? Reiciendis corrupti praesentium accusamus. Blanditiis, sapiente ipsa in ullam debitis, earum repellendus suscipit inventore voluptatibus exercitationem molestias officia perferendis iusto ducimus ratione nulla!</p>
   <Link className="lnk" to="/becomeadriver" style={{ textDecoration: 'none' }} > Sign up to ride with us <ArrowForwardIcon className="arrow"/></Link>
    </div>
    
    </div>
    <div className="car">
      <img src="../home-char.jpg" alt="" /></div>

  </div>

  <div className="main-section2">
  <div className="car-img">
    <img src="../person-in-a-car.jpg" alt="" />
  </div>
  <div className="your-own-boss">
    <h1>
    With Kozgo, <b>you really are your own boss</b> 
    </h1>
   <Link className="lnk1" to="/becomeadriver"> Become a Kozgo driver <ArrowForwardIcon className="arrow1"/></Link>
  </div>
  </div>
  
  <div className="health-and-safety">
    <h1>Health and Safety</h1>
    <p>
      The CDC recommends that everyone wear a mask over their nose and mouth when in public, including on public transportation and in transportation hubs such as airportsand stations. Masks slow the spread of COVID-19 because they help keep people who are infected from spreading respiratory droplets to others when they cough, sneeze or talk. Kozgo's riders and drivers are required to wear a mask. 
    </p>
  </div>
  <div className="img-div">
    <img src="../img.jpg" alt="" />
  </div>

  <div className="what-kozgo-offers">
  <h1>What <b>Kozgo</b> offers</h1>
  </div>
  <div className="flex-con">
  <div className="for-riders">
  <h2> For Riders</h2>
  <ul>
    <li><CheckCircleIcon className="check-circle"/> Lowest fares on the market.</li>
    <li><CheckCircleIcon className="check-circle"/> We're committed to your safety.</li>
    <li><CheckCircleIcon className="check-circle"/> It's easy and simple to book a ride.</li>
  </ul>

  <button className="for-r-button">Learn More</button>
  </div>
  <div className="for-drivers">
  <h2> For Drivers</h2>
  <ul>
    <li><CheckCircleIcon className="check-circle"/> We are deducting a percentage of your earnings up to a cap. 100% of everything you make after that is yours!</li>
    <li><CheckCircleIcon className="check-circle" />We pay for your ride share insurance up to $60.</li>
    <li><CheckCircleIcon className="check-circle" />Get your payouts weekly.</li>
  </ul>

  <button className="for-r-button">Learn More <ArrowForwardIcon/></button>
  </div>
  </div>
  <Footer></Footer>
  </div>
  )
}

export default Home
