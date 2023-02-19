import React from 'react';
import { Button } from 'react-bootstrap';
import '../App.css';
import first from "../assets/images/report.png"
import logo1 from "../assets/images/icons/client-1.svg"
import logo2 from "../assets/images/icons/client-2.svg"
import logo3 from "../assets/images/icons/client-3.svg"
import logo4 from "../assets/images/icons/client-4.svg"
import logo5 from "../assets/images/icons/client-5.svg"
function Hero() {
    return (
        <div className="container w-75 align-items-center justify-content-center third-container">
        <div className="container mt-5 pt-5 w-auto pb-lg-5" style={{paddingTop:"150px"}}>
            <div className="row">
                <div className="col-lg-4 col-md-12 order-md-1 order-1 m-auto px-lg-3 text-white">
                    <p className='fs-24px'>Advanced Platform</p>
                    <h1 className='fs-58px'>Take your team<br/>
                         to the next level</h1>
                    <p className='fs-18px'>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
                    </p>
                    <Button variant="outline-light" className="bg-light" style={{ color:'#FF6057'}}>
                        About Us
                    </Button>
                </div>
                <div className="col-lg-8 col-md-12 order-md-2 order-2 p-0">
                    <img
                        src={first}
                        alt="placeholder"
                        className="w-auto img-fluid w-auto mx-lg-5"
                    />
                    
                </div>
            </div>
        </div>
            <div className="container">
                <div className="row">
                    <div className="d-flex justify-content-center align-items-center flex-wrap Hero-logos p-0 flex-lg-nowrap">
                            <img src={logo1} alt="Partner logo 1" className="img-fluid " />
                            <img src={logo2} alt="Partner logo 2" className="img-fluid " />
                            <img src={logo3} alt="Partner logo 3" className="img-fluid" />
                            <img src={logo4} alt="Partner logo 4" className="img-fluid " />
                            <img src={logo5} alt="Partner logo 5" className="img-fluid " />
                    </div>
                    
                </div>
            </div>




   </div>         
    );
}

export default Hero;
