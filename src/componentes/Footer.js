import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const Footer = () => {
  return (
    <div className='Container3'>
        <div className='Left2'>
            <h1 className='Logo2'>SHOPPMALL</h1>
            <p className='Desc2'>Shopping is an activity in which a customer browses the available goods or 
            services presented by one or more retailers with the potential intent to purchase a suitable selection of them.</p>
        <div className='SocialContainer'>
            <div className='SocialIcon2' style={{color:"blue"}}>
            <FacebookOutlinedIcon />
            </div>
            <div className='SocialIcon2' style={{color:"orange"}}>
            <InstagramIcon />
            </div>
            <div className='SocialIcon2' style={{color:"yellow"}}>
            <TwitterIcon />
            </div>
            <div className='SocialIcon2' style={{color:"DeepPink"}}>
            <PinterestIcon />
            </div>
        </div>
    </div>
    <div className='Center2'>
            <h3 className='Title2'>USEFULL LINK</h3>
            <ul className='List2'>
                <li className='ListItem'>Home</li>
                <li className='ListItem'>Cart</li>
                <li className='ListItem'>Man Fashion</li>
                <li className='ListItem'>Women Fashion</li>
                <li className='ListItem'>Accessories</li>
                <li className='ListItem'>My Account</li>
                <li className='ListItem'>WishList</li>
                <li className='ListItem'>Terms</li>
            </ul>
    </div>
    <div className='Right2'>
        <h3 className='Title2'>TITLE</h3>
        <div className='ContactItem2'>
        <RoomOutlinedIcon style={{marginRight:"10px"}}/> 444110 Shanivar Peth , Pune-1010
        </div>
        <div className='ContactItem2'>
        <LocalPhoneOutlinedIcon style={{marginRight:"10px"}}/> +91 8787484854
        </div>
        <div className='ContactItem2'>
        <EmailOutlinedIcon style={{marginRight:"10px"}} /> shoppmall@gmail.com
        </div>
        <img className='Payment2' src="https://i.ibb.co/Qfvn4z6/payment.png"></img>
    </div>
    </div>
  )
}

export default Footer