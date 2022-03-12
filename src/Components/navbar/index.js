import React from 'react'
import './styles.css'
import Logo from "../../images/logo.png"
import Button from '@mui/material/Button';
import { Box , Divider, Tabs , Tab  } from '@mui/material';
import AddIcon from '@material-ui/icons/Add';

const NavBar = () => {
  const [value, setValue] = React.useState('Home');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
   <div className='navbar'>
      <div className='logo'> 
         <img src={Logo} alt="logo"></img>
      </div>
      <> 
        <Box className='button-group'>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="default"
            aria-label="secondary tabs example"
          >
            <Tab value="Home" label={<span className='tab-span'>Home</span>} />
            <Tab value="Buy" label={<span className='tab-span'>Buy</span>} />
            <Tab value="Rent" label={<span className='tab-span'>Rent</span>}  />
            <Divider orientation="vertical" variant="middle" flexItem />
            <Tab value="Agents" label={<span className='tab-span'>Agents</span>}  />
            <Tab value="Agencies" label={<span className='tab-span'>Agencies</span>}  />
            <Tab value="Projects" label={<span className='tab-span'>Projects</span>}  />
          </Tabs>
        </Box>
      </>
      <div className='add-property'> 
        <Button variant="contained" className="add-property-button"> 
          <AddIcon />
          Add Property
        </Button>
      </div>
   </div>
  )
}

export default NavBar



