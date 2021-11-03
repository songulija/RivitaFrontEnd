import React from 'react'
import { connect } from 'react-redux'
import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap'
import { getUserData, logout, removeUserData } from '../redux/actions/userActions'
import { withRouter } from 'react-router';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        }
    }

    logoutHandler = () => {
        this.props.logout();
        this.props.removeUserData();
    }

    componentDidMount() {
        if (this.props.usersReducer.currentUser !== null) {
            this.props.getUserData(1, () => {
            });

        }

    }
    render() {
        const naudotojas = JSON.parse(JSON.stringify(this.props.userInfoReducer));
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="/">Rivita</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Transportacijos</Nav.Link>
                                <Nav.Link href="#link"></Nav.Link>
                                {naudotojas.role ?
                                    <NavDropdown title="Papildomi langai" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="/companies">Kompanijos</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Transportacijos</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Vagonai</NavDropdown.Item>
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

export default connect(mapStateToProps, { getUserData, logout,removeUserData })(withRouter(Header));