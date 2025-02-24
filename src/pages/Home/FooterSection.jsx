import React from 'react';

import Apartmentz from '../../footer_assets/apartmentz.png';
import facebookIcon from '../../footer_assets/facebook-icon.png';
import linkedinIcon from '../../footer_assets/linkedin-icon.png';
import twitterIcon from '../../footer_assets/twitter-icon.png';
import instagramIcon from '../../footer_assets/instagram-icon.png';
import youtubeIcon from '../../footer_assets/youtube-icon.png';
import phoneIcon from '../../footer_assets/phone-icon.png';
import mailIcon from '../../footer_assets/mail-icon.png';
import locationIcon from '../../footer_assets/location-icon.png';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 bg-[#222] text-white w-full ">
      <div className="flex flex-col gap-4 p-2  md:flex-row md:p-24 ">
        <div className="w-full flex flex-col justify-between h-full mr-36  md:w-1/4"> 
                                                                           {/* 25% */}
            <img src={Apartmentz} alt="ApartmentZ Logo" className="mb-5" />
            <p>Search over 1 million listings including apartments, houses, condos, and townhomes available for rent. You'll find your next home, in any style you prefer.</p>
          <div className="flex items-center justify-center gap-4 text-[#72B944] p-5 my-14">
                                    <img src={facebookIcon} alt="Facebook" className="w-[14%] object-contain" />
                                    <img src={linkedinIcon} alt="Linkedin" className="w-[14%] object-contain" />
                                    <img src={twitterIcon} alt="Twitter" className="w-[14%] object-contain" />
                                    <img src={instagramIcon} alt="Instagram" className="w-[14%] object-contain" />
                                    <img src={youtubeIcon} alt="Youtube" className="w-[14%] object-contain" />
          </div>
          <div className="flex flex-col items-start justify-center">
                                   <h3 className="mb-5 text-lg font-bold text-white">Contact Info :</h3>
            <div className="w-full flex flex-col gap-4">
                    <div className="w-full flex items-center flex-row gap-4">
                                            <img src={phoneIcon} alt="Phone Icon" className="h-9" />
                                            <p>(888) 111-2222</p>
                    </div>
                    <div className="w-full flex items-center flex-row gap-4">
                                            <img src={mailIcon} alt="Mail Icon" className="h-8" />
                                            <p>support@apartmentz.com</p>
                    </div>
                    <div className="w-full flex items-center flex-row gap-4">
                                            <img src={locationIcon} alt="Location Icon" className="h-9" />
                                            <p>123 Urban Street, Cityville, USA</p>
                    </div>
                    </div>
          </div>
        </div>

        {['ABOUT US', 'ADVERTISERS', 'RENTAL MANAGER', 'THE MARKETPLACE'].map((title, index) => (
          <div key={index} className="w-full md:w-1/4 my-2">
                    <h3 className="text-[#72B944]">{title}</h3>
                    <ul className="mt-8 flex flex-col gap-5 font-medium list-none p-0">
                                {getLinks(title).map((link, idx) => (
                                    <li key={idx}>{link}</li>
                                ))}
                    </ul>
          </div>
        ))}
      </div>

      <div className="text-center py-2">
        <div className="border-t border-gray-400 opacity-50 mb-2 -ml-5"></div>
        <p className="opacity-70 mb-8">© 2024 Nazmulgfx Reserved</p>
      </div> 
    </footer>
  );
};

const getLinks = (title) => {
  const linksMap = {
    'ABOUT US': [
      'About Us', 'Careers', 'Contact Us', 'Legal Notices', 'Privacy Notice', 'Do Not Sell My Personal Info', 'Equal Housing', 'Avoid Scams', 'Accessibility', 'Rent Calculator', 'Renterverse', 'Sitemap'
    ],
    'ADVERTISERS': [
      'Advertise', 'Add a Property', 'Digital Feeds Program', 'Customer Portal', 'Community Voice'
    ],
    'RENTAL MANAGER': [
      'Rental Manager', 'List Your Property For Rent', 'Screen Applicants', 'Create Rental Leases', 'Collect Rent Online', 'Rental Manager Resources'
    ],
    'THE MARKETPLACE': [
      'Apartamentos.com', 'ApartmentFinder.com', 'ForRent', 'ApartmentHomeLiving.com', 'WestsideRentals.com', 'Homes.com', 'LoopNet.com', 'Land.com'
    ]
  };

  return linksMap[title] || [];
};

export default Footer;
