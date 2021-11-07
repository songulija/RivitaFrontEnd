import React from 'react'
import { connect } from 'react-redux'
import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap'
import { withRouter } from "react-router-dom";
import { getUserData, logout } from '../redux/actions/userActions'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        }
    }

    logoutHandler = () => {
        this.props.logout();
    }

    componentDidMount() {
        if (this.props.usersReducer.currentUser === null) {
            this.props.history.push('/login');
        }
    }
    render() {
        // const naudotojas = JSON.parse(JSON.stringify(this.props.userInfoReducer.role));
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="/">Rivita</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/transportations">Transportacijos</Nav.Link>
                                <Nav.Link href="#link"></Nav.Link>
                                {this.props.userInfoReducer.role === 'Administrator'?
                                    <NavDropdown title="Papildomi langai" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="/companies">Kompanijos</NavDropdown.Item>
                                        <NavDropdown.Item href="/transportations">Transportacijos</NavDropdown.Item>
                                        <NavDropdown.Item href="/wagons">Vagonai</NavDropdown.Item>
                                        <NavDropdown.Item href="/register">Naudotoju registracija</NavDropdown.Item>
                                    </NavDropdown> : null}
                                {this.props.usersReducer.currentUser ?
                                    <Button onClick={this.logoutHandler}>Logout</Button>
                                    : null}

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