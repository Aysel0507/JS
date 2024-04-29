import React from 'react'

const Login = ({ setIsLogged }) => {

    const handleLogin = () => {
        setIsLogged(true);
    };
    return (
        <button onClick={handleLogin}>Login</button>
    );

}

export default Login