import React from 'react'
import Navbar from './Navbar'
import { NavLink,Link } from "react-router-dom";
import FacebookIcon from '@material-ui/icons/Facebook';
import CircularProgress from '@material-ui/core/CircularProgress';
import Footer from "./Footer"
import {AuthContext} from "../context/AuthContext"
import axios from "axios"

function LogIn() {
   const [obj,setObj] = React.useState(null);
   const [loading , setLoading] = React.useState(false);
   const authContext = React.useContext(AuthContext);

   const handleChange = (e)=>{
      setObj((prev)=>{
         return ({
            ...prev,
            [e.target.name]:e.target.value
         })
      })
   }

   const handlelogin = async (e) =>{
      
      e.preventDefault();
      console.log(obj);
      try{
      setLoading(true);
      const data = await axios.post("https://www.kozgo.com:3999/partnerlogin",obj)
      console.log(data);
      if(data.data.status===true){
         console.log(data.data.dataAns.uId)
      const a = {
         userId:data.data.dataAns[0].uId,
         firstName:data.data.dataAns[0].firstName,
         lastName:data.data.dataAns[0].lastName,
      }
      console.log(a);
      authContext.setAuthState(a);
      setLoading(false);
      window.location="/";
   }
   else{
      alert(data.data.message);
   }
   }catch(err){
      alert(err);

   }


   } 


 return (
  <div className="login-page" >
  {loading && <div className="loading"><CircularProgress /></div> }
 <Navbar>
 </Navbar>

<div className="login">
<form action="">
<div className="login-form">

   <h1>Login</h1>

   

  <input type="text" placeholder="Email" name="email" onChange={handleChange}/>
  <input type="password" name="password" id="" placeholder="Password" onChange={handleChange} />
  <div className="forgot-pass">
  <button className="login-button" type="submit" onClick={handlelogin} >Log In</button>
  <Link className="pass">Forgot Password</Link>
  </div>
  <h4>Don't have an account? <Link className="signup-link">Sing Up Now</Link></h4>
  <hr />
  <div className="login-with">
      <div className="or-line">
      <hr />OR <hr />
         
        
      </div>
   
   </div>



<div className="fb-login" >

   <i className="fa fa-facebook fa-7x"></i><Link className="fb">Login With Facebook</Link>
   <i className="fa fa-google-plus fa-7x "></i><Link className="google">Login With Google</Link>
</div>

  </div>
  
     </form>
  </div>
    <Footer></Footer>
  </div>
 )
}

export default LogIn
