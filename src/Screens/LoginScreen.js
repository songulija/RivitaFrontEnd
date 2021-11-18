import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col, Image } from 'react-bootstrap'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../styles/Login.css";
import { login, getUserData } from '../redux/actions/userActions.js'
import { Link } from 'react-router-dom'

function LoginScreen({ location, history }) {
    //useState has initial value and function to update initial value
    const [email, setEmail] = useState('')//by default both will be strings
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const usersReducer = useSelector((state) => state.usersReducer);
    const { loading, error, currentUser } = usersReducer;//we want to distructure userLogin to these

    //check the query string. if there is then take left size of query which is number
    const redirect = location.search ? location.search.split('=')[1] : '/';
    //we want to redirect if we already logged in
    useEffect(() => {
        if (currentUser) {//if user info exist than means we already are logged in
            history.push('/transportations')//redirect to whatever is in redirect
        } else {
            history.push('/login')
        }
    }, [history, currentUser, redirect])//if userInfo changed we want to redirect

    const submitHandler = (e) => {
        e.preventDefault();//prevemnt default behaviour when submit button is clicked. preved refresh of page
        //DISPATCH LOGIN action. pass email and password that user typed
        dispatch(login(email, password, () => {
            dispatch(getUserData(1, () => {
                console.log('Yee')
            }))
        }));
    }
    return (
        <>
            <div className="Login my-auto container-fluid vh-100 vw-100">
                <Form onSubmit={submitHandler}>
                    <h1 className="h3 mb-3 fw-normal">Prašom prisijungti</h1>
                    <Form.Group size="lg" controlId="email">
                        <Form.Label>El. paštas</Form.Label>
                        <Form.Control
                            autoFocus
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="password">
                        <Form.Label>Slaptažodis</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <button className="w-100 btn btn-lg btn-primary mt-3" type="submit">Prisijungti</button>
                    <Row className='py-3'>
                        <Col>
                            Naujas naudotojas? <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>Registracija</Link>
                        </Col>
                    </Row>
                </Form>
            </div>
        </>
    )
}

export default LoginScreen;

{/* <main class="text-center" cz-shortcut-listen="true">

<form class="form-signin">
    <img class="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
    <h1 class="h3 mb-3 fw-normal">Prašom prisijungti</h1>
    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"
        value={email} onChange={(e) => setEmail(e.target.value)}
    />
    <label for="floatingInput">El. paštas</label>
    <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
        value={password} onChange={(e) => setPassword(e.target.value)}
    />
    <label for="floatingPassword">Slaptažodis</label>
    <div class="checkbox mb-3">
        <label>
            <input type="checkbox" value="remember-me" />Prisiminti mane
        </label>
    </div>
    <button class="w-100 btn btn-lg btn-primary" type="submit">Prisijungti</button>
    <p class="mt-5 mb-3 text-muted">© 2021</p>
    <Row className='py-3'>
        <Col>
            Naujas naudotojas? <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>Registracija</Link>
        </Col>
    </Row>
</form>
</main> */}