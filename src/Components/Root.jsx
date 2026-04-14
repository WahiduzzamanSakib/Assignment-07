import React from 'react';
import Navbar from './Common/Navbar';
import { Outlet } from 'react-router';
import Footer from './Common/Footer';

const Root = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;