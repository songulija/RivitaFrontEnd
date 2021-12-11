import React from 'react'
import { connect } from 'react-redux'
import { Alert } from 'react-bootstrap'
import Form from "react-bootstrap/Form";
import { Spin } from 'antd';
import "../styles/Login.css";
import { login, getUserData, getUserCompany } from '../redux/actions/userActions.js'
import { withRouter } from 'react-router-dom'
import HeaderMain from '../Component/HeaderMain';


class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
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
    changeUsername = (value) => {
        this.setState({
            username: value
        })
    }

    submitHandler = (e) => {
        e.preventDefault();//prevemnt default behaviour when submit button is clicked. preved refresh of page
        //DISPATCH LOGIN action. pass email and password that user typed
        this.props.login(this.state.username, this.state.password, () => {
            this.props.getUserData();
            this.props.getUserCompany();
            this.props.history.push('/search')
        });
    }
    render() {
        return (
            <>
                <HeaderMain />

                {this.props.usersReducer.loading !== false && this.props.usersReducer.loading !== undefined ?
                    <div style={{ textAlign: 'center' }}>
                        <Spin size="large" />
                    </div> : null}
                <div className="login my-auto container-fluid vh-100 vw-100">
                    <Form onSubmit={this.submitHandler}>
                        {this.props.usersReducer.error ?
                            <Alert key={1} variant={'danger'}>
                                <Alert.Heading>Prisijungimas buvo nesėkmnigas</Alert.Heading>
                                <p>
                                    Vartotojo vardas arba slaptažodis buvo įvesti neteisingai.
                                    Pabandykite dar kartą.
                                </p>
                            </Alert> : null}
                        <h1 className="h3 mb-3 fw-normal">Prašom prisijungti</h1>
                        <Form.Group size="lg" controlId="username">
                            <Form.Label>Vartotojo vardas</Form.Label>
                            <Form.Control
                                autoFocus
                                type="text"
                                value={this.state.username}
                                onChange={(e) => this.changeUsername(e.target.value)}
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

                        {/* <Row className='py-3'>
                            <Col>
                                Naujas naudotojas? <Link to={'/register'}>Registracija</Link>
                            </Col>
                        </Row> */}
                    </Form>
                </div>
            </>
        )
    }
}
// get redux states
const mapStateToProps = (state) => {
    return {
        usersReducer: state.usersReducer,
    }
}
// connect to redux states and defining all actions
export default connect(mapStateToProps, { getUserData,getUserCompany, login })(withRouter(LoginScreen));
