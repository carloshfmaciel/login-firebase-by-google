import React, {useState, useEffect} from 'react';
import config from '../config.json';
import FacebookLogin from 'react-facebook-login';
import IfComponent from '../utils/IfComponent';


const clientId = config.facebookApiKey;

function LoginFacebook() {

  const [facebookResponse, setFacebookResponse] = useState();

  useEffect(() => {
    console.log('Rodando LoginFacebook');
  }, []);

  const onFacebookResponse = (res) => {
    setFacebookResponse(res)
  };

  const onFailure = (error) => {
    console.log(error)
  };

  return (
    <div>
        <FacebookLogin
          appId={clientId}
          autoLoad={true}
          fields="name,email,picture"
          scope="public_profile"
          callback={onFacebookResponse}
          onFailure={onFailure}
          buttonStyle={{
            backgroundColor: '#4267b2',
            color: '#fff',
            fontSize: '16px',
            padding: '12px 24px',
            border: 'none',
            borderRadius: '4px',
            width: '70%'
          }}
          />

      <IfComponent condition={facebookResponse?.accessToken != null}>
        <h1>Facebook Token ID</h1>
        <p>{facebookResponse?.accessToken}</p>
        </IfComponent>
    </div>
  );
}

export default LoginFacebook;
