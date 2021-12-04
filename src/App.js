import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Header from './Component/HeaderHome';
import HomeScreen from './Screens/HomeScreen';
import RegisterScreen from './Screens/RegisterScreen'
import CompaniesScreen from './Screens/CompaniesScreen';
import LoginScreen from './Screens/LoginScreen';
import AdminTransportationsScreen from './Screens/AdminTransportationsScreen';
import AdminWagonScreen from './Screens/AdminWagonScreen';
import UserTransportations from './Screens/UserTransportations';
import SearchScreen from './Screens/SearchScreen';
import TransportationDetailsScreen from './Screens/TransportationDetailsScreen';

function App() {
  return (
    <>
      <Router>
        {/* <Header /> */}
        <Route path='/login' component={LoginScreen} />
        <Route path='/register' component={RegisterScreen} />
        <Route path='/companies' component={CompaniesScreen} />
        <Route path='/transportations' component={UserTransportations} exact />
        <Route path='/transportations/admin' component={AdminTransportationsScreen} />
        <Route path='/transportation/:id?' component={TransportationDetailsScreen} />
        <Route path='/wagons/:id?' component={AdminWagonScreen} />
        <Route path='/search' component={SearchScreen} />
        <Route path='/' component={HomeScreen} exact />
      </Router>
    </>
  );
}

export default App;
