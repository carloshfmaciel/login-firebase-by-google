import React from 'react';
import './App.css';
//import Login from './components/Login';
//import Logout from './components/Logout';
import LoginGoogle from './components/LoginGoogleHooks';
import LogoutGoogle from './components/LogoutGoogleHooks';
import LoginFacebook from './components/LoginFacebook';
import LogoutFacebook from './components/LogoutFacebook';

function App() {
  return (
    <div className="App">
      {/*  
      <h2>The Components way</h2>
      <Login />
      <br />
      <Logout />
      */}
      <h2>Login Google</h2>
      <LoginGoogle />
      <LogoutGoogle />
      <br/>
      <h2>Login Facebook</h2>
      <LoginFacebook />
      <LogoutFacebook />
    </div>
  );
}

export default App;
