import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Component/Header';
import HomeScreen from './Screens/HomeScreen';
import RegisterScreen from './Screens/RegisterScreen'
import CompaniesScreen from './Screens/CompaniesScreen';
import LoginScreen from './Screens/LoginScreen';
import AdminTransportationsScreen from './Screens/AdminTransportationsScreen';
import AdminWagonScreen from './Screens/AdminWagonScreen';
import UserTransportations from './Screens/UserTransportations';
import SearchScreen from './Screens/SearchScreen';
import Test from './Screens/Test';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <>
      <Router>
        <Header />
          <Route path='/login' component={LoginScreen} />
          <Route path='/test' component={Test} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/companies' component={CompaniesScreen} />
          <Route path='/transportations' component={UserTransportations} exact />
          <Route path='/transportations/admin' component={AdminTransportationsScreen} />
          <Route path='/wagons/:id?' component={AdminWagonScreen} />
          <Route path='/search' component={SearchScreen} />
          <Route path='/' component={HomeScreen} exact />
      </Router>
    </>
  );
}

export default App;
