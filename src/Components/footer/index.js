import React from 'react'
import Logo from '../../images/logo.png'
import './styles.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='upper-section'>
            <div className='logo-portion'>
                <img src={Logo} alt="logo-error" />
                <p className='description'>
                  Bookproperty.pk is an online real estate property website where you 
                  can post property search property search agency profile of trusted agents.
                </p>
            </div>
            <div className='quick-links'>
                <p className='heading'>Quick Links</p>
                <p>About Us</p>
                <p>Terms & Conditions</p>
                <p>Blog</p>
                <p>Contact Us</p>
            </div>
            <div className='contact-us'>
                <div className='upper-contact-us'>
                  <p className='heading'>Contact Us</p>
                  <p className='address'>
                    Suit # 07 1st Floor, MR Plaza, Block A Markaz Faisal Town
                    Islamabad Pakistan.
                  </p>
                  <p>
                    Info@bookproperty.pk
                  </p>
                </div>
                <div className='lower-contact-us'>
                  <p className='heading'>Follow Us</p>
                  {/* images twitter, facebook, etc*/}
                </div>
            </div>
        </div>
        <div className='lower-section'>
            <h3 className='popular-heading'>Popular Searches</h3>
            <p className='popular-heading'>Houses for Sale in Pakistan</p>

          <div className='houses-for-sale'>
              <div className='section-1'>
                <p>Houses For Sale In Lahore</p>
                <p>Houses For Sale In Lahore</p>
                <p>Houses For Sale In Lahore</p>
                <p>Houses For Sale In Lahore</p>
              </div>
              <div className='section-2'>
                <p>Appartments For Sale In Lahore</p>
                <p>Appartments For Sale In Lahore</p>
                <p>Appartments For Sale In Lahore</p>
                <p>Appartments For Sale In Lahore</p>
              </div>
              <div className='section-3'>
                <p>Plots For Sale In Lahore</p>
                <p>Plots For Sale In Lahore</p>
                <p>Plots For Sale In Lahore</p>
                <p>Plots For Sale In Lahore</p>
              </div>
              <div className='section-4'>
                <p>Farmhouses For Sale In Lahore</p>
                <p>Farmhouses For Sale In Lahore</p>
                <p>Farmhouses For Sale In Lahore</p>
                <p>Farmhouses For Sale In Lahore</p>
              </div>
          </div>
        </div>
        <div className='copyrights'>
              <div>
                <p> © 2021 BookProperty.pk. All rights reserved. </p>
              </div>
              <div className='conditions'>
                <p>Terms &  Conditions</p>
                <p> Privacy policy </p>
              </div>
          </div>
    </div>
  )
}

export default Footer;