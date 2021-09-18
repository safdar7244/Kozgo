import React,{useState,useContext} from 'react'
import Navbar from './Navbar'
import Footer from "./Footer"
import {Link} from 'react-router-dom'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import axios from "axios"
import {AuthContext} from "../context/AuthContext"
import CircularProgress from '@material-ui/core/CircularProgress';
function BecomeDriver() {

   const [driverObj,setDriverObj]=useState(null);
   const [signupForm,setSignUpForm]=useState(true);
   const [optForm,setOtpForm]=useState(false);
   const [phase1,setphase1]=useState(true);
   const [vehicleInfo,setVehicleInfo]=useState(null);
   const [vehiclFlag,setVehicleFlag]=useState(false);
   const [ssnFlag,setSSNFlag]=useState(false);
   const [backgroundCheckFlag,setBackgroundCheckFlag]=useState(false);
   const [insuranceFlag,setInsuranceFlag]=useState(false);
   const [driverPhoto,setDriverPhoto]=useState(false);
   const[insuranceFiles,setInsuranceFiles]=useState([]);
   const [drvPhoto,setDrvPhoto]=useState(null);
   const [licesnse,setLicense]=useState(null);
   const authContext = useContext(AuthContext);
   const [loading , setLoading] = useState(false);
   const handleForm = (e)=>{


      setDriverObj((prev)=>{
         return ({
            ...prev,
            [e.target.name]:e.target.value
         })
      })
   
      
   }

   function handleDriverPhoto(e){

         setDrvPhoto(e.target.files[0]);

   }

   async function uploadDriverPhoto(){

         const data = new FormData();

         console.log(drvPhoto);

         data.append('doc_files', drvPhoto);
         data.append('userId',authContext.authState.userId);
         
         try{
            setLoading(true);
            console.log(data.get('userId'));
         const data1 =await axios.post("https://www.kozgo.com:3999/upload_docs",data,{headers: {
                        
                        "Content-type": "multipart/form-data",
         },                    
         });
         console.log(data1);
         setLoading(false);
         window.location="/";
         }catch(err){
            console.log(err);
         }
   }

   const handleVehicleForm = (e)=>{
          setVehicleInfo((prev)=>{
         return ({
            ...prev,
            [e.target.name]:e.target.value
         })
      })
   }

   const handleVehicleFormSubmit = (e)=>{
      e.preventDefault();
      console.log(vehicleInfo);
      setVehicleFlag(false);
      setSSNFlag(true);
   }

   const handleSubmit = async (e)=>{
      e.preventDefault();
      if(driverObj.password !== driverObj.confirmPassword){
         alert("The password does not match");
      }
      else{
      console.log(driverObj);
      try{
      setLoading(true);
      const data = await axios.post("https://www.kozgo.com:3999/partnerregister",driverObj)
      console.log(data);
      if(data.data.status===true){

      const a = {
         userId:data.data.lastInsertedId,
         firstName:driverObj.firstName,
         lastName:driverObj.lastName,
      }
      console.log(a);
      authContext.setAuthState(a);
      setLoading(false);
      setSignUpForm(false);
      setOtpForm(true);}
      else{
         console.log('here')
         if(data.data.message)
         alert(data.data.message);
      }
      }catch(err){
         alert(err);
      }
      }
   }

   const handleOTP = () =>{
      setphase1(false);
      setSSNFlag(true);
   }

   const handleSsn = ()=>{
      setSSNFlag(false);
      setBackgroundCheckFlag(true);
   }

   const handleBackgroundCheck = (e)=>{
      e.preventDefault();
      setBackgroundCheckFlag(false);
      setInsuranceFlag(true);
   }

   const handlefile1 = (e)=>{
         console.log(e.target.files)
         const a= insuranceFiles;
         a.push(e.target.files[0])
         setInsuranceFiles(a);
         // const data = new FormData();

         // data.append('file1', insuranceFile1);
        
         // console.log(data.get('file1'));
   }

   //   const handlefile2 = (e)=>{
   //       console.log(e.target.files);
   //       setInsuranceFile2(e.target.files[1]);
   //       console.log(insuranceFile2);
   // }

   const uploadFile1 = async()=>{
      console.log(insuranceFiles);

      const data = new FormData();

         data.append('doc_files', insuranceFiles[0]);
         data.append('userId',authContext.authState.userId);
         try{
         const data1 =await axios.post("https://www.kozgo.com:3999/upload_docs",data,{headers: {
                        
                        "Content-type": "multipart/form-data",
                    },                    
                });
         console.log(data1);
         }catch(err){
            console.log(err);
         }

   }

   const uploadFile2 = async()=>{

      const data = new FormData();

         data.append('doc_files', insuranceFiles[1]);
         data.append('userId',authContext.authState.userId);
         try{
         const data1 =await axios.post("https://www.kozgo.com:3999/upload_docs",data,{headers: {
                        
                        "Content-type": "multipart/form-data",
                    },                    
                });
         console.log(data1);
         }catch(err){
            console.log(err);
         }

   }

   const handleInsurance = async (e)=>{
      e.preventDefault();
      setLoading(true);
      try{
             const data = new FormData();

         data.append('doc_files', insuranceFiles[0]);
         data.append('userId',authContext.authState.userId);
         try{
         const data1 =await axios.post("https://www.kozgo.com:3999/upload_docs",data,{headers: {
                        
                        "Content-type": "multipart/form-data",
                  },                    
               });
         console.log(data1);
         const data12 = new FormData();

         data12.append('doc_files', insuranceFiles[1]);
         data12.append('userId',authContext.authState.userId);
         const data2 =await axios.post("https://www.kozgo.com:3999/upload_docs",data12,{headers: {
                        
                        "Content-type": "multipart/form-data",
                    },                    
                });
         console.log(data2);
         
         setLoading(false);
         setInsuranceFlag(false);
         setDriverPhoto(true);
         
         }catch(err){
            console.log(err);
         }
      }catch(err){
      alert(err);
      }
   }

   const handleLicense = (e)=>{
      e.preventDefault();
      setLicense(e.target.files[0]);

   }

   const uploadLicense = async (e)=>{
         e.preventDefault();
         console.log("herer");

         const data = new FormData();

         data.append('doc_files', licesnse);
         data.append('userId',authContext.authState.userId);
         try{
         setLoading(true);
         const data1 =await axios.post("https://www.kozgo.com:3999/upload_docs",data,{headers: {
                        
                        "Content-type": "multipart/form-data",
                    },                    
                });
         console.log(data1);
         setLoading(false);
         setSSNFlag(false);
         setBackgroundCheckFlag(true);
         }catch(err){
            console.log(err);
         }

   }

return (
<div className="become-rider">
{loading && <div className="loading"><CircularProgress /></div> }
<Navbar/>
{phase1 && <>
   <div className="main-form">


      <div className="form">
   {signupForm &&  <form className="su" onSubmit={handleSubmit}>
   <h2>Sign up to drive with Kozgo </h2>
   
   <input className="t-1" type="text" placeholder="Phone Number" name="mobileNo" onChange={handleForm} required />
   <div className="name-input">
   
   <input className="t-2" type="text" placeholder="First Name" name="firstName" onChange={handleForm} required/>
      <input className="t-3" type="text" placeholder="Last Name" name="lastName" onChange={handleForm} required/>
      </div>
      <input className="t-1" type="text" placeholder="Email" name="email" onChange={handleForm} required/>
      <input className="t-1" type="text" placeholder="City" name="city" onChange={handleForm} required/>
      <input className="t-1" type="password" placeholder="Create Password" name="password" onChange={handleForm} required />
      <input className="t-1" type="password" placeholder="Confirm Password" name="confirmPassword"onChange={handleForm} required />   
      <div >
      <input type="checkbox" required/>
      <label for="vehicle1"> I agree to Kozgo's Terms of Service</label>
      </div>
      <button type="submit" >Next</button> 
      </form>}

      {optForm && <form className='otp' onSubmit={handleOTP} >


         <h1>Verify OTP</h1>
         
         <p>OTP sent to your phone.</p>
         <input type="text" required/> <br />
         <Link className="resend-otp">Resend OTP</Link>
         <button  type='submit' className="otp-btn">Submit</button>
      </form>}


   
   </div>
   </div>
 
   <div className="mid-section">

    <div className="purple">
     <h1>Why drive with <b> Kozgo? </b></h1>
     <p>A big chunk of earning is truly yours. Once you reach our monthly goal, 100% of your earnings and tips belong to you.</p>
     <p className="bottom">Get a better insurrance coverage with us as we require our drivers to carry a rideshare insurance. Yes, we pay for it.</p>
    </div>

    <div className="white">
    <h1>What you <b>Need</b></h1>
    <p>Make sure you meet the requirements for your state and/or city, have a reliable smartphone and be able to pass a DMV background check.</p>
    </div>

   </div>
   </>}

   {!phase1&& <>
   
      <div className="vehicle-info">
   
         <div className="vehicle-form">
         
         <div className="vehicle-form-bg">
     {vehiclFlag &&  <form onSubmit={handleVehicleFormSubmit}>
            <h1>Vehicle Information</h1>
            <div className="vehicle-inner-div">
            <p>Your vehicle must be 2005 or newer and have a minimum of 4 doors and 5 seatbelts.</p>
            <div className="flex-2">
               <input type="text" placeholder="Year" name="year" required onChange={handleVehicleForm}/>
               <input type="text" placeholder="Make" name="make" required onChange={handleVehicleForm}/>
            </div>
            <div className="flex-2">
               <input type="text" placeholder="Model" name="model" required onChange={handleVehicleForm} />
               <input type="text" placeholder="Color" name="color" required onChange={handleVehicleForm} />
            </div>
            <div className="flex-2">
               <input type="number" placeholder="Doors" name="doors" required onChange={handleVehicleForm} />
               <input type="number" placeholder="Seatbelts" name="seatbelts" onChange={handleVehicleForm} required/>
            </div>
            <input type="text" placeholder="License Plate" name="licensePlates" required onChange={handleVehicleForm}/>
            <input type="text" placeholder="State" name="state" required onChange={handleVehicleForm}/>
            </div>
            <button className="continue-btn">Continue</button>
            </form> }
            {ssnFlag && <>
            <form onSubmit={uploadLicense} >
            <h1>Social Secuirity Number</h1>
            <div className="ssn-inner-div">
            <p>It will be needed to run a background check and process your pay.</p>
            <input type="password" />
            </div>
            <div className="license">
            <h1>Driver's License</h1>
            <p >You will need a current driver's license of the state you operate in, and be 25 or older. Make sure your driver's license is not blurry and includes all 4 corners of the card and is still valid. You have to have at least one year of driving.</p>
         <div class="image-upload">
         <label for="file-input">
         <img src="../cloud.png"/>
         </label>

         <input id="file-input" type="file" onChange={handleLicense}/>
         </div>
   
      <div className="check1">
      <input id="check" type="checkbox" required/>
   
      <label for="check">
            I have more than one year of driving
         </label>
         </div>
         <button type="submit" className="continue-btn">Continue</button>
            </div>
            </form>
            </> }

      {backgroundCheckFlag && 
      <>
      <h1>Background Check</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia nostrum, voluptatibus ut ea quo quae sed id non porro unde. Libero, laudantium ipsam. Doloremque porro tempore animi nihil nam corrupti est, quisquam quas neque recusandae sapiente odit repellat, cumque aspernatur magni voluptate ratione incidunt minima doloribus voluptatibus. Iusto aspernatur, accusamus, voluptatem at quidem laborum repellat sint delectus vel corporis aperiam ipsum quas laudantium? Nobis totam atque assumenda eaque, eum quod minima quisquam modi voluptas tempore hic qui placeat.
      </p>     
               <form onSubmit={handleBackgroundCheck}>
               <button className="authorize-btn">I Authorize</button>
               </form>
      </>}

      {insuranceFlag && <>
            <h1>Insurance</h1>
            
               <p>Make sure your insurance documents include: </p>
            <ul className="list">
               <li>Your car's make and model</li>
               <li>Your policy expiration date</li>
               <li>Your name</li>
               <li>Your rideshare coverage details</li>
            </ul>
         
         <div class="image-upload">
         <label for="file-input">
         <img src="../cloud.png"/>
         </label>

         <input id="file-input" type="file" onChange={handlefile1}/>
         </div>
   
         <h2>Insurance</h2>
         <p>Upload your inspection here</p>
         <div class="image-upload">
         <label for="file-input">
         <img src="../cloud.png"/>
         </label>
         <input type="file" onChange={handlefile1}/>
         </div>
   
         <button className="continue-btn1" onClick={handleInsurance}>Continue</button>
         
         </>
      }

      {driverPhoto && <>
         <h1>Driver Photo</h1>
         <p>Remove your hat or sunglasses.</p>
         <p>Make sure to the photo in an area with plenty of light.</p>
         <p><b>Say cheese!</b></p>


         <div class="image-upload">
         <label for="file-input">
         <img src="../cloud.png"/>
         </label>

         <input id="file-input" type="file" onChange={handleDriverPhoto}/>
         </div>
   
         <button className="continue-btn1" onClick={uploadDriverPhoto}>Continue</button>
         
         


      </>}
      

            </div>
         
         </div>

         <div className="side-info">

      <p className={vehiclFlag? "act": ""} >Vehicle Information {ssnFlag || backgroundCheckFlag || insuranceFlag ||
      driverPhoto ? <CheckCircleIcon className="done"/> :null} </p>
      <hr />
      <p className={ssnFlag? "act": ""}>Driver Information { backgroundCheckFlag || insuranceFlag ||
      driverPhoto ? <CheckCircleIcon className="done"/> : null}</p>
      <hr />
      <p className={backgroundCheckFlag?"act":""}>Background Check {insuranceFlag ||
      driverPhoto ? <CheckCircleIcon className="done"/> : null}</p>
      <hr />
      <p className={insuranceFlag?"act":""}>Insurance {driverPhoto && <CheckCircleIcon className="done"/>}</p>
      <hr />
      <p className={driverPhoto?"act":""}>Driver Photo</p>
         </div>
      </div>
      
   
   </>}
   <Footer></Footer>
  </div>
 )
}

export default BecomeDriver
