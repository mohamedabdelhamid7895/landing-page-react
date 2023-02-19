import "../App.css"
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import logo from "../assets/images/icons/logo.svg"
const Footer = () => {
    return (
        <footer className="bg-dark text-white third-container">
            <Container className='w-75'>
                <Row className="justify-content-center pt-3">
                    <Col md={4}>
                        <img src={logo}alt='' />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget diam at mi sollicitudin
                        </p>
                    </Col>
                    <Col md={4} className='pt-4'>
                        <h5>Nos services</h5>
                        <p className="w-50">
                            Avis clients
                            Mentions légales
                            Plan du site
                            Blog d’Idéematic
                            Le dictionnaire du digital
                            ‹ Notre boutique /›
                        </p>
                    </Col>
                    <Col md={4} className='pt-4 px-0' >
                        <h5 className="pb-3">Subscribe to our newsletter</h5>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <InputGroup className="mb-3" >
                                    <Form.Control
                                        placeholder="Recipient's username"
                                        aria-label="Recipient's username"
                                        aria-describedby="basic-addon2"
                                        className="rounded-end"
                                    />
                                    <button className='email-btn rounded-end' id="button-addon2">
                                        Button
                                    </button>
                                </InputGroup>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
