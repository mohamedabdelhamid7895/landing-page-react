import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {  Container, Nav, Button } from 'react-bootstrap';
import MyNavbar from "./components/Navbar"
import Hero from './components/Hero';
import SecondSection from './components/SecondSection';
import ImageTextButton from './components/ThirdSection';
import MySlider from './components/SliderSection';
import FourthSection from './components/FourthSection';
import MarketResearch from './components/MarketResearch';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
// import { Button } from 'react-bootstrap';

function App() {

  return(
    <div className='app'>
     <MyNavbar />
    <Hero />
    <SecondSection/>
    <ImageTextButton/>
      <MySlider />
      <FourthSection/>
      <MarketResearch />
      <Testimonials />
      <Footer/>
   </div> 
  )
  
}

export default App
