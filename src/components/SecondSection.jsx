import React from 'react';
import icon1 from '../assets/images/icons/Component 2 – 1.svg';
import icon2 from '../assets/images/icons/Component 3 – 1.svg';
import icon3 from '../assets/images/icons/Component 4 – 1.svg';
import icon4 from '../assets/images/icons/Component 5 – 1.svg';
import arrowIcon from '../assets/images/icons/arrow-alt-right.svg';
import '../App.css';

const SecondSection = () => {
    return (
        <div className="container d-flex justify-content-center align-items-center  flex-md-row flex-column second">
            <div className="row w-100 bg-orange py-3 px-lg-5 ">
                <div className="w-25 line  "></div>

                <div className="col-sm-12">
                    <h1 className='fs-1'>The best business<br/>
                        solution for you</h1>
                    <p className='fs-6'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
                        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam <br/>
                        et justo duo dolores et ea rebum.
                        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet</p>
                    <button className="btn-outline-light border-0 bg-transparent fs-5 btn-color" >Learn About Our Success
                        <img src={arrowIcon} className="p-3" alt="Thin arrow icon" />
                    </button>
                </div>
            </div>
            <div className="row w-100">
                <div className="col-md-6 col-sm-12">
                    <div className=" align-items-center mb-3">
                        <img src={icon1} alt="Icon 1" className="me-3" />
                        <div>
                            <h3>Scale Your Activity</h3>
                            <div className="w-25 line "></div>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore</p>
                        </div>
                    </div>
                    <div className=" align-items-center">
                        <img src={icon2} alt="Icon 2" className="" />
                        <div>
                            <h3>Bootcamps</h3>
                            <div className="w-25 line "></div>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className=" align-items-center mb-3">
                        <img src={icon3} alt="Icon 3" className="me-3" />
                        <div>
                            <h3>Hight Quality</h3>
                            <div className="w-25 line "></div>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore</p>
                        </div>
                    </div>
                    <div className=" align-items-center">
                        <img src={icon4} alt="Icon 4" className="me-3" />
                        <div>
                            <h3>Get Certifcation</h3>
                            <div className="w-25 line "></div>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default SecondSection;
