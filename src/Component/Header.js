import React,{useState,useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import {getUserData} from '../redux/actions/userActions'

const Header = ({history,location}) => {
    const dispatch = useDispatch();
    const usersReducer = useSelector((state) => state.usersReducer);

    useEffect(()=>{
        dispatch(getUserData(()=>{
            console.log('Header got data')
        }))
    },[history, dispatch])
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Rivita</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Pagrindinis</Nav.Link>
                            <Nav.Link href="#link"></Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Kompanijos</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Transportacijos</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Vagonai</NavDropdown.Item>
                                <NavDropdown.Divider />
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;