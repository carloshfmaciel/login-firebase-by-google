import React, {useState} from 'react';
import config from '../config.json';
import { useGoogleLogin } from 'react-google-login';
import IfComponent from '../utils/IfComponent';

// refresh token
import { refreshTokenSetup } from '../utils/refreshToken';

const clientId = config.googleApiKey;

function LoginGoogleHooks({props}) {

  const [getGoogleResponse, setGoogleResponse ] = useState();
  const [isGoogleLogged, setIsGoogleLogged ] = useState(props);

  const onSuccess = (res) => {
    setIsGoogleLogged(true);
    setGoogleResponse(res);
    console.log('Login Success: currentUser:', res);
    alert(
      `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    );
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    setIsGoogleLogged(false);
    console.log('Login failed: res:', res);
    alert(
      `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
    );
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
    // responseType: 'code',
    // prompt: 'consent',
  });

  return (

    <div>
      <button onClick={signIn} className="button">
        <img src={require('../static/icons/google.svg')} alt="google login" className="icon"></img>

        <span className="buttonText">Sign in with Google</span>
      </button>
      <IfComponent condition={getGoogleResponse?.tokenId != null}>
        <h1>Google Token ID</h1>
        <p>{getGoogleResponse?.tokenId}</p>
      </IfComponent>
    </div>
  );
}

export default LoginGoogleHooks;
