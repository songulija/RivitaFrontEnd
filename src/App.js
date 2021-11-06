import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import Header from './Component/Header.js';
import HomeScreen from './Screens/HomeScreen';
import RegisterScreen from './Screens/RegisterScreen.js'
import CompaniesScreen from './Screens/CompaniesScreen.js';
import LoginScreen from './Screens/LoginScreen.js';
import AdminTransportationsScreen from './Screens/AdminTransportationsScreen'
import AdminWagonsByTransportationAdd from './Screens/AdminWagonsByTransportationAdd.js';

function App() {
  return (
    <Router>
      <Header />
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/companies' component={CompaniesScreen} />
          <Route path='/transportations' component={AdminTransportationsScreen}/>
          <Route path='/wagons/:id' component={AdminWagonsByTransportationAdd}/>
          <Route path='/' component={HomeScreen} exact />

    </Router>
  );
}

export default App;
