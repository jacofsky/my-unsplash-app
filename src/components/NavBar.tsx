import React from 'react'
import AddPhoto from './AddPhoto'
import SignIn from './SignIn'

const NavBar = () => {
  return (
    <nav className='d-flex row justify-content-between align-items-center my-3'>

        <div className='customFlexNav justify-content-center justify-content-md-start col-12 col-md-6'>
            
          <SignIn/>
          <div className='searchImage d-flex p-1 my-4 my-md-0'>
              <i className="bi bi-search p-2"></i>
              <input className='searchImageInput p-2'  placeholder='Search by name' type="text" />

          </div>

        </div>

        <AddPhoto/>
        
    </nav>
  )
}

export default NavBar