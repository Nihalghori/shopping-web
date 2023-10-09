import React from 'react';
import './home.css';



import Image from './images/8439e53cfc28aad0879019284dc7d5cb-removebg-preview.png';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const home = () => {
 
   

    return (
        <div>
            

            

            {/* Slider/Banner Carousel */}
     <div>
        <div className='back'>    </div>
     <div> <img src={Image} alt="Product 6" className="image" />
     
     </div>
 
     <div className='Home'>
                <div className="home-container">
               
            <h3>FASHION FOR EVERYONE</h3>
            <h1>Fall Winter Collection </h1>
            <h1>2023</h1>
 </div>
 </div>
 </div>
                    
             
             
            {/* First Additional Section */}
        
       <div className='heading'><h1>New Collections</h1></div>
         
            <div className="product-card0">
     
           
            </div>
            <div className="product-card2">
     
          
            </div>
            <div className="product-card3">
     
            
            </div>
           
            <div className="product-card1">
     
            </div>
            

            
            {/* Second Additional Section */}
           
            <footer>
    <div className="footer-container">
        <div className="footer-section">
            <h3>About Us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac justo ut est suscipit facilisis.</p>
        </div>
        <div className="footer-section">
            <h3>Quick Links</h3>
          
        </div>
        <div className="footer-section">
            <h3>Contact Information</h3>
            <address>
                <p>123 Main Street</p>
                <p>City, State ZIP</p>
                <p>Email: info@example.com</p>
                <p>Phone: +1 (123) 456-7890</p>
            </address>
        </div>
    </div>
</footer>

                {/* Content for the second additional section goes here */}
            </div>
        
    );
};



export default home;



