// src/Footer.jsx  
import React from 'react';  
import './Footer.css'; // Import CSS file for styling  
import Apartmentz from '../../assets/apartmentz.png'; // Import your image  


const Footer = () => {  
  return (  
    <footer className="footer">  
      <div className="footer-content">
        <div className="imgSection">
        <img src={Apartmentz} alt="ApartmentZ Logo" className="footer-logo" />  
        
        <p>Search over 1 million listings including apartments, houses, condos, and townhomes available for rent. You'll find your next home, in any style you prefer.</p>  

    <div className="icons">
    <i class="fa-brands fa-instagram"></i>
    <i class="fa-brands fa-instagram"></i>
    <i class="fa-brands fa-instagram"></i>
    <i class="fa-brands fa-instagram"></i>
    <i class="fa-brands fa-instagram"></i>

    </div>

        <div className="contact-info">  
          <h3>Contact Info:</h3>  
          <p>(888) 111-2222</p>  
          <p>support@apartmentz.com</p>  
          <p>123 Urban Street, Cityville, USA</p>  
        </div>  
            </div>  
     
        

        <div className="links">  
          <h3>About Us</h3>  
          <ul className='LinksList'>  
            <li>About Us</li>  
            <li>Careers</li>  
            <li>Contact Us</li>  
            <li>Privacy Notice</li>  
            <li>Equal Housing</li>  
          </ul>  
        </div>  

        <div className="links">  
          <h3>Advertisers</h3>  
          <ul className='LinksList'>  
            <li>Advertise</li>  
            <li>Add a Property</li>  
            <li>Digital Feeds Program</li>  
            <li>Customer Portal</li>  
            <li>Community Voice</li>  
          </ul>  
        </div>  

        <div className="links">  
          <h3>Neighborhoods</h3>  
          <ul className='LinksList'>  
            <li>Las Colinas</li>  
            <li>Bronx, NYC</li>  
            <li>Federal Hill MD</li>  
            <li>East Village</li>  
            <li>Hyde Park</li>  
          </ul>  
        </div>  

        <div className="links">  
          <h3>Rental Manager</h3>  
          <ul  className='LinksList'>  
            <li>Rental Manager</li>  
            <li>List Your Property For Rent</li>  
            <li>Screen Applicants</li>  
            <li>Create Rental Leases</li>  
          </ul>  
        </div>  

        <div className="links">  
          <h3>The Marketplace</h3>  
          <ul className='LinksList'>  
            <li>Apartamentos.com</li>  
            <li>ApartmentFinder.com</li>  
            <li>ForRent</li>  
          </ul>  
        </div>  
      </div>  
      <div className="footer-bottom">  
        <div class="footer-line"></div>
        <p>© 2024 Nazmulgfx Reserved</p>  
      </div>  
    </footer>  
  );  
};  

export default Footer;