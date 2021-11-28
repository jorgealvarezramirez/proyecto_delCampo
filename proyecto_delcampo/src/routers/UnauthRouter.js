import React from 'react'
import { Route, Routes } from 'react-router';
import Auth from '../Pages/public/Auth';
import Home from '../Pages/public/Home';

const Unauthrouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/auth" element={<Auth/>}/>
        </Routes>
    )
}

export default Unauthrouter;

