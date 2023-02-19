import { Container, Row, Col, Button } from 'react-bootstrap';
import componentimage from "../assets/images/report.png";
import arrowIcon from '../assets/images/icons/arrow-alt-right.svg';
import "../App.css";
function FourthSection() {
    return (
        <Container className="d-flex flex-column-reverse flex-md-row align-items-center mb-5 third-container  ">
            <Row className="w-100">
                <Col md={6} className="order-md-2">
                    <img src={componentimage} alt="" className="w-100 h-auto" />
                </Col>
                <Col md={6} className="order-md-1">
                    <div className="w-25 line  "></div>

                    <div className="p-3">
                        <h1 className='fs-1'>Best Platform for the
                            Technological Era</h1>
                        <p className='fs-6'>lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                         sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,<br/> 
                         sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                            Stet clita kasd gubergren, no sea takimata sanctus est Lorem </p>
                        <button className="btn-outline-light  border-0 bg-transparent fs-5 btn-color" >Learn About Our Success
                        </button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
export default FourthSection;