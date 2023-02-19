import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import firstimage from "../assets/images/third-section-img.png";
import secondimage from "../assets/images/third-section-img-2.png"
import thirdimage from "../assets/images/third-section-img-3.png"
import "../App.css"
const MySlider = () => {
    return (
        <Container fluid className='third-container'>
            <Row className="justify-content-center align-items-center">
                <Col md={6} className="text-center">
                    <h3>Advanced Customer Service Platform</h3>
                    <h1>Platform Overview</h1>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt 
                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et<br/> accusam et justo duo
                         dolores et ea rebum.
                        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet</p>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col md={8} className="text-center">
                    <Carousel indicators={false} controls={false} interval={1000} >
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={firstimage}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={secondimage}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={thirdimage}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Container>
    );
};

export default MySlider;
