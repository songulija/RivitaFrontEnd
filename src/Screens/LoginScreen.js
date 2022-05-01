import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Alert } from 'react-bootstrap'
import Form from "react-bootstrap/Form";
import { Spin } from 'antd';
import "../styles/Login.css";
import { login, getUserData, getUserCompany } from '../redux/actions/userActions.js'
import { useHistory } from 'react-router-dom'
import HeaderMain from '../Component/HeaderMain';
import { useTranslation } from 'react-i18next';

function LoginScreen(props) {
    const history = useHistory()
    const dispatch = useDispatch()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const usersReducer = useSelector((state) => state.usersReducer);
    //for language
    const { t } = useTranslation();
    const changePassword = (value) => {
        setPassword(value)
    }
    const changeUsername = (value) => {
        setUsername(value)
    }

    const submitHandler = (e) => {
        e.preventDefault();//prevemnt default behaviour when submit button is clicked. preved refresh of page
        //DISPATCH LOGIN action. pass email and password that user typed
        dispatch(login(username, password, () => {
            getUserData();
            getUserCompany();
            history.push('/search')
        }));
    }
    //we want to redirect if we already logged in
    useEffect(() => {
        if (usersReducer.currentUser !== null) {//if user info exist than means we already are logged in
            history.push('/search')//redirect to whatever is in redirect
        } else {
            history.push('/login')
        }
    },[])
    return (
        <>
            <HeaderMain />

            {usersReducer.loading !== false && usersReducer.loading !== undefined ?
                <div style={{ textAlign: 'center' }}>
                    <Spin size="large" />
                </div> : null}
            <div className="login my-auto container-fluid vh-100 vw-100">
                <Form onSubmit={submitHandler}>
                    {usersReducer.error ?
                        <Alert key={1} variant={'danger'}>
                            <Alert.Heading>{t('login_error_title')}</Alert.Heading>
                            <p>
                                {t('login_error_text')}
                            </p>
                        </Alert> : null}
                    <h1 className="h3 mb-3 fw-normal">{t('login_title')}</h1>
                    <Form.Group size="lg" controlId="username">
                        <Form.Label>{t('login_username')}</Form.Label>
                        <Form.Control
                            autoFocus
                            type="text"
                            value={username}
                            onChange={(e) => changeUsername(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="password">
                        <Form.Label>{t('login_password')}</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            onChange={(e) => changePassword(e.target.value)}
                        />
                    </Form.Group>
                    <button className="w-100 btn btn-lg btn-primary mt-3" type="submit">{t('login_button')}</button>

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
// connect to redux states and defining all actions
export default LoginScreen;
