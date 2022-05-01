import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useHistory } from "react-router-dom";
import { logout } from '../redux/actions/userActions'
import logo from '../images/rivita-logo.png'
import { useTranslation } from 'react-i18next';

function HeaderMain(props) {
    const history = useHistory()
    const dispatch = useDispatch()
    const usersReducer = useSelector((state) => state.usersReducer);
    const userInfoReducer = useSelector((state) => state.userInfoReducer);

    //for language
    const { t } = useTranslation();
    const logoutHandler = () => {
        dispatch(logout());
        history.push('/')
    }
    return (
        <div>
            <Navbar bg="light" expand="xl">
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand href="/">
                            <img style={{ width: '100px' }} src={logo} alt='Logo' />
                        </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/" style={{ fontWeight: '500', fontSize: '18px', color: '#436066' }}>{t('header_main')}</Nav.Link>
                            {usersReducer.currentUser === null ?
                                <>
                                    <LinkContainer to='/' style={{ fontWeight: '500', fontSize: '18px', color: '#436066' }}>
                                        <Nav.Link>{t('header_about')}</Nav.Link>
                                    </LinkContainer>

                                    <LinkContainer to='/' style={{ fontWeight: '500', fontSize: '18px', color: '#436066' }}>
                                        <Nav.Link>{t('header_services')}</Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to='/' style={{ fontWeight: '500', fontSize: '18px', color: '#436066' }}>
                                        <Nav.Link >{t('header_cargos')}</Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to='/' style={{ fontWeight: '500', fontSize: '18px', color: '#436066' }}>
                                        <Nav.Link style={{ fontWeight: '500', fontSize: '18px', color: '#436066' }}>{t('header_contacts')}</Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to='/login' style={{ fontWeight: '500', fontSize: '18px', color: '#436066' }}>
                                        <Nav.Link>{t('header_clients')}</Nav.Link>
                                    </LinkContainer>
                                </>
                                : null}
                            {usersReducer.currentUser ?
                                <>
                                    <LinkContainer to='/search' style={{ fontWeight: '500', fontSize: '18px', color: '#436066' }}>
                                        <Nav.Link href="/search">{t('header_search')}</Nav.Link>
                                    </LinkContainer>
                                    {/* <Nav.Link href="/transportations" style={{ fontWeight: '500', fontSize: '18px', color: '#436066' }}>TRANSPORTAVIMAS</Nav.Link> */}
                                    {userInfoReducer.role === 'ADMINISTRATOR' ?
                                        <NavDropdown title="ADMIN" id="basic-nav-dropdown" style={{fontWeight: '500', fontSize: '18px', color: '#436066'}}>
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
                                    <Button onClick={logoutHandler}>Atsijungti</Button>
                                </> : null}




                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )

}
export default HeaderMain;