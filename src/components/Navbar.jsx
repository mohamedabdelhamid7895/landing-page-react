import { useState, useEffect } from 'react';
import '../App.css';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import logo from "../assets/images/icons/logo.svg"
// import { Button } from 'react-bootstrap';

function MyNavbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            if (scrollTop >= 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <Navbar  className={`navbar ${isScrolled ? 'navbar-dark bg-dark' : 'navbar-light'}`} variant="dark" expand="md" fixed="top">
            <Container className="container-lg w-75  ">
                <Navbar.Brand href="#" className=''>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="150" height="73" viewBox="0 0 180 73">
                        <text id="St_vdy" data-name="Stdy" transform="translate(0 55)" fill="#fff" font-size="52" font-family="Poppins-Bold, Poppins" font-weight="700"><tspan x="0" y="0" xml:space="preserve">ST    DY</tspan></text>


                    </svg> */}
                    <img src={logo} alt='logo' width={150}/>

                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav ">
                        <Nav className="mx-auto">
                        <Nav.Link href="#" className='text-white fs-6'> Browser</Nav.Link>
                        <Nav.Link href="#" className="fs-6 text-white px-4">Bootcamps</Nav.Link>
                        <Nav.Link href="#" className="fs-6 text-white px-2">How it works</Nav.Link>
                        <Nav.Link href="#" className="fs-6 text-white">Testimonials</Nav.Link>
                    </Nav>
                    <Nav>
                        <Button variant="outline-light" className="btn-main-color">
                            About Us
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;
