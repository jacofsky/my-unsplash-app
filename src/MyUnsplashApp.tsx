import React from 'react'
import NavBar from './components/NavBar'
import ImageContainer from './components/ImageContainer';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const MyUnsplashApp = () => {

  return (
      <div className='container'>
          <NavBar/>
          <ImageContainer/>
          <Footer/>
      </div>
  )
}

export default MyUnsplashApp