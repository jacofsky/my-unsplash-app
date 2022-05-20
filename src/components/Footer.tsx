import React from 'react'
import { useSelector } from 'react-redux';

const Footer = () => {

  const {loading} = useSelector((state:any) => state.ui )


  return (
    <div className={(loading) ? 'footer-loading' : 'footer' }>
        <p className='footer-text'>🎉 Made by <a href='https://github.com/jacofsky' className='footer-link' >Jaco👦 </a> 🎉</p>
    </div>
  )
}

export default Footer