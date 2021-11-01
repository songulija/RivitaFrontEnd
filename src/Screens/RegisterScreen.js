import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col, Image } from 'react-bootstrap'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../styles/Login.css";
import { register, getUserData } from '../redux/actions/userActions.js'
import { Link } from 'react-router-dom'

function RegisterScreen({ location, history }) {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const usersReducer = useSelector((state)=> state.usersReducer);
    const redirect = location.search ? location.search.split('=')[1] : '/';
    const submitHandler = ()=>{

    }

    useEffect(()=>{
        console.log('Register screen')
        if(usersReducer.currentUser !== null){

        }else{
            history.push('/')
        }
    },[dispatch, history,usersReducer.currentUser])
    return (
        <div className="Login my-auto container-fluid vh-100 vw-100">
            <Form onSubmit={submitHandler}>
                <h1 className="h3 mb-3 fw-normal">Naudotojų registracija</h1>
                <Form.Group controlId='text'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type='name'
                        placeholder='Enter name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='email'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Enter email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='Password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Enter password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    >

                    </Form.Control>

                </Form.Group>


                <Form.Group controlId='Password'>
                    <Form.Label>Confirm password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Confirm password'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    >

                    </Form.Control>

                </Form.Group>

                <Button type='Submit' variant='primary'> Sign In</Button>

            </Form>
        </div>
    )
}

export default RegisterScreen;
