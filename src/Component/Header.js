import React from 'react'
import { connect } from 'react-redux'
import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap'
import { withRouter } from "react-router-dom";
import { getUserData, logout } from '../redux/actions/userActions'
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
        this.props.history.push('/login')
    }

    componentDidMount() {
        // if (this.props.usersReducer.currentUser === null) {
        //     this.props.history.push('/login');
        // }
    }
    render() {
        // const naudotojas = JSON.parse(JSON.stringify(this.props.userInfoReducer.role));
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">
                            <img style={{ width: '100px' }} src={logo} alt='Logo' />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/" style={{ fontWeight: '500', fontSize: '18px', color: '#436066' }}>PAGRINDINIS</Nav.Link>
                                <Nav.Link href="/" style={{ fontWeight: '500', fontSize: '18px', color: '#436066' }}>APIE KOMPANIJĄ</Nav.Link>
                                <Nav.Link href="/" style={{ fontWeight: '500', fontSize: '18px', color: '#436066' }}>PASLAUGOS</Nav.Link>
                                <Nav.Link href="/" style={{ fontWeight: '500', fontSize: '18px', color: '#436066' }}>KROVINIAI</Nav.Link>
                                <Nav.Link href="/" style={{ fontWeight: '500', fontSize: '18px', color: '#436066' }}>KONTAKTAI</Nav.Link>
                                <Nav.Link href="/login" style={{ fontWeight: '500', fontSize: '18px', color: '#436066' }}>KLIENTAMS</Nav.Link>
                                {this.props.usersReducer.currentUser ?
                                    <>
                                        <Nav.Link href="/transportations" style={{ fontWeight: '500', fontSize: '18px', color: '#436066' }}>Transportacijos</Nav.Link>
                                        {this.props.userInfoReducer.role === 'Administrator' ?
                                            <NavDropdown title="Papildomi langai" id="basic-nav-dropdown">
                                                <NavDropdown.Item href="/companies">Kompanijos</NavDropdown.Item>
                                                <NavDropdown.Item href="/transportations/admin">Transportacijos</NavDropdown.Item>
                                                <NavDropdown.Item href="/wagons">Vagonai</NavDropdown.Item>
                                                <NavDropdown.Item href="/register">Naudotoju registracija</NavDropdown.Item>
                                                <NavDropdown.Item href="/serch">Paieška</NavDropdown.Item>
                                            </NavDropdown> : null}
                                        <Button onClick={this.logoutHandler}>Logout</Button>
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

export default connect(mapStateToProps, { getUserData, logout })(withRouter(Header));