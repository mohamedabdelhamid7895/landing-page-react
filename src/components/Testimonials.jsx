import React from 'react';
import { Container, Row, Col, Image, Carousel, Button } from 'react-bootstrap';
import "../App.css"
import man from "../assets/images/leader.jpeg"
const ExampleComponent = () => {
    return (
        <Container  className='third-container'>
            <Row>
                <Col className="text-center">
                    <h1>Don't Just Take<br/>
                        our Word for it!</h1>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col md={3} sm={6} className="text-center">
                    <h1 className='btn-color'>570 </h1>
                    <p>Dowload</p>
                </Col>
                <Col md={3} sm={6} className="text-center">
                    <h1 className='btn-color'>570 </h1>
                    <p>Active User</p>
                </Col>
                <Col md={3} sm={6} className="text-center">
                    <h1 className='btn-color'>570 </h1>
                    <p>Positive Feedback</p>
                </Col>
                <Col md={3} sm={6} className="text-center">
                    <h1 className='btn-color'>570 </h1>
                    <p>+ rating</p>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col md={5} sm={12}>
                    <Carousel interval={null} controls={false} indicators={false}>
                        <Carousel.Item className=' mt-4'>
                            <Image src={man} className='flex-lg- col-4 'width={157} height={203}/>
                            
                            <Carousel.Caption className='text-dark mt-0  col-4 text-break  mx-lg- pt-0 w-100 caption'>
                                <h3>Florrie Jacobs</h3>
                                <h5>CEO of Company</h5>
                                <p className='px-sm-5 mx-sm-5 testiP'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
                            </Carousel.Caption>
                        </Carousel.Item>   
                    </Carousel>
                </Col>
                <Col md={6} sm={12} className=" flex-column justify-content-center align-items-center">
                    <h1>Acceleration Process to
                        Grow Your Business</h1>
                    <p>
                        orem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet
                    </p>
                    <Button variant="outline-light" className="btn-main-color">
                        About Us
                    </Button>      
                </Col>
            </Row>
        </Container>
    );
};

export default ExampleComponent;
