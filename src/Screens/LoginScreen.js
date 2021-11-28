import React from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Form from "react-bootstrap/Form";
import "../styles/Login.css";
import { login, getUserData } from '../redux/actions/userActions.js'
import { Link, withRouter } from 'react-router-dom'

class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    //we want to redirect if we already logged in
    componentDidMount() {
        if (this.props.usersReducer.currentUser !== null) {//if user info exist than means we already are logged in
            this.props.history.push('/search')//redirect to whatever is in redirect
        } else {
            this.props.history.push('/login')
        }
    }

    changePassword = (value) => {
        this.setState({
            password: value
        });
    }
    changeEmail = (value) => {
        this.setState({
            email: value
        })
    }

    submitHandler = (e) => {
        e.preventDefault();//prevemnt default behaviour when submit button is clicked. preved refresh of page
        //DISPATCH LOGIN action. pass email and password that user typed
        this.props.login(this.state.email, this.state.password, () => {
            this.props.getUserData();
            this.props.history.push('/search')
        });
    }
    render() {
        return (
            <>
                <div className="login my-auto container-fluid vh-100 vw-100">
                    <Form onSubmit={this.submitHandler}>
                        <h1 className="h3 mb-3 fw-normal">Prašom prisijungti</h1>
                        <Form.Group size="lg" controlId="email">
                            <Form.Label>El. paštas</Form.Label>
                            <Form.Control
                                autoFocus
                                type="email"
                                value={this.state.email}
                                onChange={(e) => this.changeEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group size="lg" controlId="password">
                            <Form.Label>Slaptažodis</Form.Label>
                            <Form.Control
                                type="password"
                                value={this.state.password}
                                onChange={(e) => this.changePassword(e.target.value)}
                            />
                        </Form.Group>
                        <button className="w-100 btn btn-lg btn-primary mt-3" type="submit">Prisijungti</button>
                        <Row className='py-3'>
                            <Col>
                                Naujas naudotojas? <Link to={'/register'}>Registracija</Link>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </>
        )
    }
}
// get redux states
const mapStateToProps = (state) =>{
    return {
        usersReducer : state.usersReducer
    }
}
// connect to redux states and defining all actions
export default connect(mapStateToProps, {getUserData,login})(withRouter(LoginScreen));
