import { Typography } from '@material-ui/core'
import React from 'react'
import FreshListings from '../../Components/freshListing'
import MegaProjects from '../../Components/megaProjects'
import OurAgencies from '../../Components/ourAgencies'
import './home.css'

const Home = () => {
  return (
    <div className='home-container'>
      <div className='hero-section'>
        <Typography variant='h4' component='h6' className='hero-heading'>
            Hey ! Looking For A Trusted Properties ?
        </Typography >
        <Typography variant='h3' component='h6' className='hero-subheading'>
          Let’s Find Out
        </Typography>
        {/* Search Component */}
      </div>
      {/* Our Agencies */}
      <div className='our-agencies'>
        <OurAgencies />
      </div>
      {/* Fresh Listing */}
      <div className='fresh-listing'>
        <FreshListings />
      </div>
      {/* Mega Projects */}
      <div className='mega-projects'>
        <MegaProjects />
      </div>
    </div>
  )
}

export default Home