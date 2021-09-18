import React,{useContext} from 'react'
import { NavLink,Link } from "react-router-dom";
import {AuthContext} from "../context/AuthContext"
function Navbar() {
  const authContext = useContext(AuthContext);
  return (
  <div className="navbar">
  <NavLink to="/" ><img src="../logo.png" alt="" /></NavLink>
  {authContext.authState.userId ?<p className="button-links">Welcome {authContext.authState.firstName} {authContext.authState.lastName}</p> : <> <NavLink className="button-links" to="/becomeadriver">Sign up</NavLink>
  <NavLink className="button-links"  to="/login">Login</NavLink> </>}
  <NavLink className="links" activeClassName='linksactive' to="/ridewithus">Ride with Us</NavLink>
  {!authContext.authState.userId && <><NavLink className="links" activeClassName='linksactive' to="/becomeadriver"> Become a Driver</NavLink></>}
  <NavLink className="links" activeClassName='linksactive' to="/" exact={true}> Home </NavLink>


  </div>
)
}

export default Navbar
