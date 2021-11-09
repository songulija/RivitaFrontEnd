import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { Select } from 'antd'
import { Container, Row, Col, Image } from 'react-bootstrap'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../styles/Login.css";
import {register, getUsers} from '../redux/actions/userActions'
import { getCompanies } from '../redux/actions/companiesActions.js'
import { Link, withRouter } from 'react-router-dom'

const { Option } = Select;

class RegisterScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                phoneNumber: '',
                companyId: '',
                email: '',
                password: ''
            },
            companies: [],
            users: []
        }
    }

    submitHandler = () => {
        const userClone = JSON.parse(JSON.stringify(this.state.user));
        const postObj = {
            "email": userClone.email,
            "password": userClone.password,
            "phoneNumber": userClone.phoneNumber,
            "companyId": userClone.companyId,
            "roles": [
                "USER"
            ]
        }
        console.log('Post object sent to action:'+JSON.stringify(postObj))
        this.props.register(postObj, () => {
            console.log('Registered usser succesfully')
        });
    }

    onDataChange = (value, inputName) => {
        const userClone = JSON.parse(JSON.stringify(this.state.user));
        if (inputName === "phoneNumber") {
            userClone.phoneNumber = value;
        } else if (inputName === "companyId") {
            userClone.companyId = value;
        } else if (inputName === "email") {
            userClone.email = value;
        } else if (inputName === "password") {
            userClone.password = value;
        }

        this.setState({
            user: userClone
        }, () => console.log('User changed:' + JSON.stringify(this.state.user)));
    }

    //get companies. becouse when register we asign companies
    componentDidMount() {
        if (this.props.usersReducer.currentUser !== null && this.props.userInfoReducer.role === 'Administrator') {
            this.props.getUsers(1, () =>{
                const usersClone = JSON.parse(JSON.stringify(this.props.usersListReducer.users));
                this.setState({
                    users: usersClone
                }, () => console.log('Got all users:'+JSON.stringify(this.state.users)))
            });
            this.props.getCompanies(1, () => {
                const companiesClone = JSON.parse(JSON.stringify(this.props.companiesReducer.companies));
                this.setState({
                    companies: companiesClone
                });
            });
        } else {
            // this.props.history.push('/login')
        }
    }
    render() {
        return (
            <div className="Login my-auto container-fluid vh-100 vw-100">
                <Form onSubmit={this.submitHandler}>
                    <h1 className="h3 mb-3 fw-normal">Naudotojų registracija</h1>
                    <Form.Group controlId='text'>
                        <Form.Label>Telefono numeris</Form.Label>
                        <Form.Control
                            type='phone'
                            placeholder='Įveskite telefono numerį'
                            value={this.state.phoneNumber}
                            onChange={(e) => this.onDataChange(e.target.value, "phoneNumber")}
                        >

                        </Form.Control>
                    </Form.Group>
                    <p style={{ marginBottom: '5px' }}>Kompanija</p>
                    <Select
                        showSearch
                        style={{ width: '320px' }}
                        placeholder="Priskirkite kompaniją"
                        optionFilterProp="children"
                        onChange={(e) => this.onDataChange(e, "companyId")}
                    >
                        {this.state.companies.map((element, index) => {
                            return (<Option name={element.id} value={element.id}>{element.name}</Option>)
                        })}
                    </Select>

                    <Form.Group controlId='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type='email'
                            placeholder='Įveskite el. paštą'
                            value={this.state.email}
                            onChange={(e) => this.onDataChange(e.target.value, "email")}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type='password'
                            placeholder='Įveskite slaptažodį'
                            value={this.state.password}
                            onChange={(e) => this.onDataChange(e.target.value, "password")}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Button type='Submit' variant='primary'> Registruoti</Button>

                </Form>
            </div>
        )
    }
}

//getting all redux states
const mapStateToProps = (state) => {
    return {
        usersReducer: state.usersReducer,
        userInfoReducer: state.userInfoReducer,
        companiesReducer: state.companiesReducer,
        usersListReducer: state.usersListReducer
    }
}
//connect to redux states, defining all action that we will use
export default connect(mapStateToProps, { getUsers,getCompanies, register })(withRouter(RegisterScreen));
