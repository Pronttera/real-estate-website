import React from "react";  

const ContactUsSection = () => { // Function Component  
    return (  
        <div className="search-container">  
            <h1>Search over 1 million listings</h1>  
            <p>Search over 1 million listings including apartments, houses, condos, and townhomes available for rent. You’ll find your next home in any style you prefer.</p>  
            <input type="text" className="search-input" placeholder="Enter Keyword" />  
            <button className="search-button">Search</button>  
        </div>  
    );  
};  

export default ContactUsSection; // Exporting ContactUsSection Component
