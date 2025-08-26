import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Footer = () => {
  return (
    <div>
      <div className='footer'>
        <h1>Contact Us</h1>
        <h6><EmailIcon/> resumebuilder123@gmail.com</h6>
        <h6><PhoneIphoneIcon/>9878676545</h6>
        
        <h4>Connect with Us</h4>
        <div><WhatsAppIcon/><InstagramIcon/><LinkedInIcon/><GitHubIcon/></div>

        <h5>Design and build using React <FavoriteBorderIcon/></h5>

      </div>
    </div>
  )
}

export default Footer
