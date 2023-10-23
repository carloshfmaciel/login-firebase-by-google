import React from 'react';
import config from '../config.json';
import { GoogleLogout } from 'react-google-login';

const clientId = config.googleApiKey;

function Logout() {

  const onSuccess = () => {
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;
