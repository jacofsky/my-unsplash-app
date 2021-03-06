import React from 'react'
import { useSelector } from 'react-redux';

const Footer = () => {

  const {loading} = useSelector((state:any) => state.ui )


  return (
    <div className={(loading) ? 'footer-loading' : 'footer' }>
        <p className='footer-text'>ð Made by <a href='https://github.com/jacofsky' className='footer-link' >Jacoð¦ </a> ð</p>
    </div>
  )
}

export default Footer