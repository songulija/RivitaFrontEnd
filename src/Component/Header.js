import React from 'react'
import { connect } from 'react-redux'
import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap'
import { withRouter } from "react-router-dom";
import { logout } from '../redux/actions/userActions'
import logo from '../images/rivita-logo.png'

class Header extends React.Component {
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

    componentDidMount() {
        // this.props.getUserData(() =>{
        //     console.log('Header got user data:'+JSON.stringify(this.props.userInfoReducer))
        // })
        
    }
    render() {
        // const naudotojas = JSON.parse(JSON.stringify(this.props.userInfoReducer.role));
        return (
            <div>
                <Navbar bg="light" expand="xl">
                    <Container>
                        <Navbar.Brand href="/">
                            <img style={{ width: '100px' }} src={logo} alt='Logo' />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/" style={{ fontWeight: '500', fontSize: '18px', color: '#436066' }}>PAGRINDINIS</Nav.Link>
                                {this.props.usersReducer.currentUser === null ?
                                    <>
                                        <Nav.Link href="/" style={{ fontWeight: '500', fontSize: '18px', color: '#436066' }}>APIE MUS</Nav.Link>
                                        <Nav.Link href="/" style={{ fontWeight: '500', fontSize: '18px', color: '#436066' }}>PASLAUGOS</Nav.Link>
                                        <Nav.Link href="/" style={{ fontWeight: '500', fontSize: '18px', color: '#436066' }}>KROVINIAI</Nav.Link>
                                        <Nav.Link href="/" style={{ fontWeight: '500', fontSize: '18px', color: '#436066' }}>KONTAKTAI</Nav.Link>
                                        <Nav.Link href="/login" style={{ fontWeight: '500', fontSize: '18px', color: '#436066' }}>KLIENTAMS</Nav.Link></>
                                    : null}
                                {this.props.usersReducer.currentUser ?
                                    <>
                                        <Nav.Link href="/search" style={{ fontWeight: '500', fontSize: '18px', color: '#436066' }}>PAIEŠKA</Nav.Link>
                                        {/* <Nav.Link href="/transportations" style={{ fontWeight: '500', fontSize: '18px', color: '#436066' }}>TRANSPORTAVIMAS</Nav.Link> */}
                                        {this.props.userInfoReducer.role === 'Administrator' ?
                                            <NavDropdown title="Admin" id="basic-nav-dropdown">
                                                <NavDropdown.Item href="/companies">KOMPANIJOS</NavDropdown.Item>
                                                <NavDropdown.Item href="/transportations/admin">TRANSPORTAVIMAS</NavDropdown.Item>
                                                <NavDropdown.Item href="/wagons">VAGONAI</NavDropdown.Item>
                                                <NavDropdown.Item href="/register">NAUDOTOJŲ REGISTRACIJA</NavDropdown.Item>
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

export default connect(mapStateToProps, { logout })(withRouter(Header));