import React from 'react'
import NavBar from './components/NavBar'
import ImageContainer from './components/ImageContainer';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { startCheking } from './actions/auth';
AOS.init();



const MyUnsplashApp = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    console.log('Hola');
    dispatch(startCheking() as any);
    
  }, [])

  return (
    <div>
      <div className='container'>
          <NavBar/>
          <ImageContainer/>
      </div>
      <Footer/>
    </div>
  )
}

export default MyUnsplashApp