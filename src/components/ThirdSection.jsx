import { Container, Row, Col, Button } from 'react-bootstrap';
import componentimage from"../assets/images/second-section-img.png"
import arrowIcon from '../assets/images/icons/arrow-alt-right.svg'
import "../App.css";
function ImageTextButton() {
    return (
        <Container className="d-flex flex-column-reverse flex-md-row align-items-center mb-5 third-container  ">
            <Row className="w-100">
                <Col md={6} className="order-md-2">
                    <div className="w-25 line  "></div>

                    <div className="p-3">
                        <h1 className='fs-1'>The best business<br />
                            solution for you</h1>
                        <p className='fs-6'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam <br />
                            et justo duo dolores et ea rebum.
                            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet</p>
                        <button className="btn-outline-light  border-0 bg-transparent fs-5 btn-color" >Learn About Our Success
                            <img src={arrowIcon} className="p-3" alt="Thin arrow icon" />
                        </button>
                    </div>
                </Col>
                <Col md={6} className="order-md-1">
                    <img src={componentimage} alt=""className="w-100 h-auto" />
                </Col>
            </Row>
        </Container>
    );
}
export default ImageTextButton;