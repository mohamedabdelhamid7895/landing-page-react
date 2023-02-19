import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../App.css"
const MarketResearch = () => {
    return (
        <Container>
            <Row className="justify-content-md-center third-container">
                <Col md={6} className="mt-lg-5 pt-lg-5">
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
                <Col md={6}>
                    <Row>
                        <Col md={3}>
                            <div className="d-flex flex-column align-items-center">
                                <div className="steps text-center rounded-circle  p-2">
                                    1
                                </div>
                                <div className="border-left bg-success p-1 vertical-line"></div>
                                <div className="steps text-center rounded-circle p-2 mt-">
                                    2
                                </div>
                                <div className="border-left bg-success p-1 vertical-line "></div>
                                <div className="steps text-center rounded-circle p-2 mt-">
                                    3
                                </div>
                                <div className="border-left bg-danger p-1 vertical-line "></div>

                            </div>
                        </Col>
                        <Col md={9}>
                            <div className="d-flex flex-column">
                                <h3>Market Research</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                                    </p>
                            </div>
                            <div className="d-flex flex-column mt-lg-4">
                                <h3>Market Research</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                                </p>
                            </div>
                            <div className="d-flex flex-column ">
                                <h3>Market Research</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default MarketResearch;
