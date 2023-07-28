import React from 'react'
import "./index.css"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CartWidget from './CartWidget';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from '@mui/material/Button';

function Header() {
  return (
    <>
      <div className='header'>
        {/*IMG LOGO*/}
        <div>
          <Button variant="dark"><a href='./'>
            <img style={{ width: 120, height: 65 }} className='image' src={('/workpls.png')} alt='' />
          </a>
          </Button>
        </div>
        {/*SEARCH BAR*/}
        <div className='header-input-container'>
          <FloatingLabel>
            <Form.Control className="header-input" type="text" placeholder='Search any product' />
          </FloatingLabel>
          <Button variant="dark">
            <SearchOutlinedIcon style={{ marginTop: 2, color: 'black' }} />
          </Button>
        </div>
        <div className='profile-wrapper'>
          <Button variant="dark">
            <h4 className='header-tag'>My Profile</h4>
          </Button>
        </div>
        <CartWidget />

      </div>
      <div className='nav-buttons'>
        <Button style={{ color: 'white' }}>Woman clothes</Button>
        <Button style={{ color: 'white' }}>Men clothes</Button>
        <Button style={{ color: 'white' }}>Jewelry</Button>
        <Button style={{ color: 'white' }}>Technology</Button>
        <Button style={{ color: 'white' }}>Flash Sale</Button>
      </div>
    </>
  )
}
export default Header

