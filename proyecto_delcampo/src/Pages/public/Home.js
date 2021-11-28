import React from 'react'
import Register from '../../components/Register';
import Login from '../../components/Login';
import Footter from '../../components/Footter';

const Home = () => {
    return (
        <div>
            <h2>Home</h2>
            <Login/>
            <Register/>
            <Footter/>
        </div>
    )
}

export default Home