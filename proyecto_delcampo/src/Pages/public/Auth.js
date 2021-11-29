import React from 'react'
import Register from '../../components/Register';
import Login from '../../components/Login';
import Banner from '../../components/Banner';

const Auth = () => {
    return (
        <div>
            <Login />
            <Banner />
            <Register />
        </div>
    )
}

export default Auth;