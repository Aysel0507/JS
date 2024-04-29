import React from 'react'

const Logout = ({ setIsLogged }) => {
    const handleLogout = () => {
        setIsLogged(false);
    };

    return (
        <button onClick={handleLogout}>Logout</button>
    );
};


export default Logout