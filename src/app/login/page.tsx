'use client';
import React, { useState } from 'react';
import GoogleSignin from 'react-google-signin';

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleGoogleSignIn = async () => {
    const response = await GoogleSignin.signIn();
    if (response.accessToken) {
      setIsLoggedIn(true);
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <h1>You are logged in!</h1>
      ) : (
        <button onClick={handleGoogleSignIn}>Login with Google</button>
      )}
    </div>
  );
};

export default Login;
