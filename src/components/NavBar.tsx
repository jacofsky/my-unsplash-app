import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSearcher } from '../actions/uiActions'
import AddPhoto from './AddPhoto'
import Logout from './Logout'
import SignIn from './SignIn'

const NavBar = () => {

  const {logged} = useSelector((state:any) => state.auth)

  const [label, setLabel] = useState('')

  const dispatch = useDispatch()

  const searchOnchange = (value:string) => {
    setLabel(value)
    console.log(label)
    dispatch(setSearcher(value.trim()))
  } 

  return (
    <nav className='d-flex row justify-content-between align-items-center my-3'>

        <div className='customFlexNav justify-content-center justify-content-md-start col-12 col-md-6'>
          {
            logged ? <Logout/> : <SignIn/>
          }
          <div className='searchImage d-flex p-1 my-4 my-md-0'>
              <i className="bi bi-search p-2"></i>
              <input className='searchImageInput p-2' onChange={(e) => searchOnchange(e.target.value)}  placeholder='Search by name' value={label} type="text" />

          </div>

        </div>

        <AddPhoto/>
        
    </nav>
  )
}

export default NavBar