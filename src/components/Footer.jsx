import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
 return (
  <div className="footer">

  <p className="tos">Terms of Service | Privacy Policy</p>
  <p className="copy">	&#169; Copyright 2021 Kozgo</p>
  <div className="icons"><FacebookIcon className="social-media-icons"/> <InstagramIcon className="social-media-icons"/></div>
  </div>
 )
}
 
export default Footer
