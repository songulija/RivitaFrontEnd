import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { Select } from 'antd'
import { Container, Row, Col, Image } from 'react-bootstrap'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../styles/Login.css";
import { register } from '../redux/actions/userActions.js';
import { getCompanies } from '../redux/actions/companiesActions.js'
import { Link } from 'react-router-dom'

const { Option } = Select;

function RegisterScreen({ location, history }) {
    const dispatch = useDispatch();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [company, setCompany] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [companies,setCompanies] = useState([])

    const usersReducer = useSelector((state) => state.usersReducer);
    const userInfoReducer = useSelector((state) => state.userInfoReducer)
    const companiesReducer = useSelector((state) => state.companiesReducer)

    const redirect = location.search ? location.search.split('=')[1] : '/';
    const submitHandler = () => {

    }

    const changeCompany = (e) => {
        console.log('Company' + e)
    }
    //get companies. becouse when register we asign companies
    useEffect(() => {
        if (usersReducer.currentUser !== null && userInfoReducer.role === 'Administrator') {
            dispatch(getCompanies(1, () => {
                console.log('Companies:' + JSON.stringify(companiesReducer.companies))
            }));
        } else {
            history.push('/')
        }
    }, [dispatch, history, usersReducer.currentUser, userInfoReducer.role])
    return (
        <div className="Login my-auto container-fluid vh-100 vw-100">
            <Form onSubmit={submitHandler}>
                <h1 className="h3 mb-3 fw-normal">Naudotojų registracija</h1>
                <Form.Group controlId='text'>
                    <Form.Label>Telefono numeris</Form.Label>
                    <Form.Control
                        type='phone'
                        placeholder='Įveskite telefono numerį'
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    >

                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='company'>
                <Form.Label>Kompanija</Form.Label>
                    <Form.Select aria-label="Default select example">
                        
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group controlId='email'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Įveskite el. paštą'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Įveskite slaptažodį'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Button type='Submit' variant='primary'> Registruoti</Button>

            </Form>
        </div>
    )
}

export default RegisterScreen;
