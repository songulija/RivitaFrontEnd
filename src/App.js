import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import Header from './Component/Header.js';
import HomeScreen from './Screens/HomeScreen';
import Register, { RegisterScreen } from './Screens/RegisterScreen.js'
import CompaniesScreen from './Screens/CompaniesScreen.js';
import LoginScreen from './Screens/LoginScreen.js';

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/companies' component={CompaniesScreen} />
          <Route path='/' component={HomeScreen} exact />
        </Container>
      </main>
    </Router>
  );
}

export default App;
