import React from 'react'
import AddPhoto from './AddPhoto'
import SignIn from './SignIn'

const NavBar = () => {
  return (
    <nav className='d-flex mx-5 justify-content-between align-items-center my-3'>

        <div className='d-flex'>
            
            <SignIn/>

            <div className='searchImage p-1'>
                <i className="bi bi-search p-2"></i>
                <input className='searchImageInput p-2'  placeholder='Search by name' type="text" />

            </div>

        </div>

        <AddPhoto/>
        
    </nav>
  )
}

export default NavBar