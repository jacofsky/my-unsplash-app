import React from 'react'
import NavBar from './components/NavBar'
import ImageContainer from './components/ImageContainer';
import { useSelector } from 'react-redux';
import { Spinner } from 'react-bootstrap';

const MyUnsplashApp = () => {

  return (
    <div className='container'>
        <NavBar/>
        <ImageContainer/>
    </div>
  )
}

export default MyUnsplashApp