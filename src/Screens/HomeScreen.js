import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
// import { login } from '../redux/actions/userActions.js'
import { Link } from 'react-router-dom'
import LoginScreen from './LoginScreen'
import { getUserData } from '../redux/actions/userActions'

function HomeScreen({ location, history }) {
    const dispatch = useDispatch();
    const usersReducer = useSelector((state)=>state.usersReducer);
    const { loading, error, currentUser } = usersReducer;//we want to distructure userLogin to these

    //check the query string. if there is then take left size of query which is number
    const redirect = location.search ? location.search.split('=')[1] : '/login';

    useEffect(()=>{
        if(currentUser){
            dispatch(getUserData(()=>{
                console.log('Got user data')
            }));
        }else{
            history.push(redirect);
        }
    },[history,currentUser,redirect]);



    return (
        <>
            <h1>Hello</h1>
        </>
    )
}

export default HomeScreen;