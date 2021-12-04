import React from 'react'
import { connect } from 'react-redux'
import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { withRouter } from "react-router-dom";
import { logout } from '../redux/actions/userActions'
import logo from '../images/rivita-logo.png'
import { animateScroll as scroll, scroller, Link } from 'react-scroll'

class HeaderHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        }
    }

    logoutHandler = () => {
        this.props.logout();
        this.props.history.push('/')
    }
    render() {
        // const naudotojas = JSON.parse(JSON.stringify(this.props.userInfoReducer.role));
        return (
            <div>
                <Navbar bg="" variant='light' expand="xl"  >
                    <Container>
                        <LinkContainer to='/'>
                            <Navbar.Brand href="/">
                                <img style={{ width: '100px' }} src={logo} alt='Logo' />
                            </Navbar.Brand>
                        </LinkContainer>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/" style={{ fontWeight: '500', fontSize: '18px', color: 'white' }}>PAGRINDINIS</Nav.Link>
                                {this.props.usersReducer.currentUser === null ?
                                    <>
                                        <LinkContainer to='' style={{ color: 'white', fontWeight: '500', fontSize: '18px' }}>
                                            <Link className="nav-link" to="about" smooth={true} duration={400} offset={-40}>APIE MUS</Link>
                                        </LinkContainer>

                                        <LinkContainer to='' style={{ color: 'white', fontWeight: '500', fontSize: '18px' }}>

                                            <Link className="nav-link" to="paslaugos" smooth={true} duration={500}>PASLAUGOS</Link>
                                        </LinkContainer>
                                        <LinkContainer to='/' style={{ color: 'white', fontWeight: '500', fontSize: '18px' }}>

                                            <Link className="nav-link" to="kroviniai" smooth={true} duration={500}>KROVINIAI</Link>
                                        </LinkContainer>
                                        <LinkContainer to='/' style={{ color: 'white', fontWeight: '500', fontSize: '18px' }}>

                                            <Link className="nav-link" to="kontaktai" smooth={true} duration={500}>KONTAKTAI</Link>
                                        </LinkContainer>
                                        <LinkContainer to='/login' style={{ color: 'white', fontWeight: '500', fontSize: '18px' }}>
                                            <Nav.Link>KLIENTAMS</Nav.Link>
                                        </LinkContainer>
                                    </>
                                    : null}
                                {this.props.usersReducer.currentUser ?
                                    <>
                                        <LinkContainer to='/search' style={{ fontWeight: '500', fontSize: '18px', color: 'white' }}>
                                            <Nav.Link href="/search">PAIEŠKA</Nav.Link>
                                        </LinkContainer>
                                        {/* <Nav.Link href="/transportations" style={{ fontWeight: '500', fontSize: '18px', color: '#436066' }}>TRANSPORTAVIMAS</Nav.Link> */}
                                        {this.props.userInfoReducer.role === 'Administrator' ?
                                            <NavDropdown title="Admin" id="basic-nav-dropdown">
                                                <LinkContainer to='/companies'>
                                                    <NavDropdown.Item>KOMPANIJOS</NavDropdown.Item>
                                                </LinkContainer>
                                                <LinkContainer to='/transportations/admin'>
                                                    <NavDropdown.Item>TRANSPORTAVIMAS</NavDropdown.Item>
                                                </LinkContainer>
                                                <LinkContainer to='/wagons'>
                                                    <NavDropdown.Item>VAGONAI</NavDropdown.Item>
                                                </LinkContainer>
                                                <LinkContainer to='/register'>
                                                    <NavDropdown.Item>NAUDOTOJŲ REGISTRACIJA</NavDropdown.Item>
                                                </LinkContainer>
                                            </NavDropdown> : null}
                                        <Button onClick={this.logoutHandler}>Atsijungti</Button>
                                    </> : null}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }

}

//selecting part of data from store. like with useSelector
const mapStateToProps = (state) => {
    return {
        usersReducer: state.usersReducer,
        userInfoReducer: state.userInfoReducer
    }
}

export default connect(mapStateToProps, { logout })(withRouter(HeaderHome));