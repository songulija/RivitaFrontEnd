import React from 'react'
import { Container, Navbar, Nav, Row, Col, Carousel } from 'react-bootstrap'
import logo from '../images/rivita-logo.png'
import '../styles/Home.css'

const HomeScreen = () => {
    return (

        <>
            <div style={{ background: '#82979c', color: 'white' }}>
                <Container>
                    <Row>
                        <Col lg={3}><i class="fas fa-map-marker"></i> <span>Švitrigailos g.11A, LT-03228 Vilnius</span></Col>
                        <Col lg={2}><i class="fas fa-phone"></i><span>+3702650264</span></Col>
                        <Col lg={3}><i class="far fa-clock"></i><span> Pirmdienis-Penktadienis, 8:00-17:30</span></Col>
                    </Row>

                    {/* <span style={{ color: '#fff' }} class="content"><i class="fa rt-icon-placeholder2"></i> Švitrigailos g.11A, LT-03228 Vilnius</span>
                    <span style={{ color: '#fff' }} class="content"><i class="fa rt-icon-telephone"></i> <span style={{ color: '#fff' }}>+3702650264</span></span>
                    <span style={{ color: '#fff' }} class="content"><i class="fa rt-icon-3-time"></i> Pirmdienis-Penktadienis, 8:00-17:30</span> */}

                </Container>
            </div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img style={{ width: '100px' }} src={logo} alt='Logo' />

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#home" style={{ fontWeight: '500', fontSize: '18px', color: '#436066' }}>PRADŽIA</Nav.Link>
                            <Nav.Link href="#link" style={{ fontWeight: '500', fontSize: '18px', color: '#436066' }}>APIE KOMPANIJĄ</Nav.Link>
                            <Nav.Link href="#link" style={{ fontWeight: '500', fontSize: '18px', color: '#436066' }}>PASLAUGOS</Nav.Link>
                            <Nav.Link href="#link" style={{ fontWeight: '500', fontSize: '18px', color: '#436066' }}>KROVINIAI</Nav.Link>
                            <Nav.Link href="#link" style={{ fontWeight: '500', fontSize: '18px', color: '#436066' }}>KONTAKTAI</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className='header-img' style={{ height: '70vh' }} >
                <div className='main' >
                    <div className='header-content '>
                        <h3>KROVINIŲ EKSPEDIJAVIMAS GELEŽINKELIO TRANSPORTU.</h3>
                        <h1 style={{ fontWeight: 'bold', color: '#516C71' }}>20 METŲ PATIRTIS.</h1>
                    </div>
                </div>
            </div>


        </>

    )
}

export default HomeScreen;