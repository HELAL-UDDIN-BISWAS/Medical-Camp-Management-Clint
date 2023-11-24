import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../Pages/Home/Home/Home';
import Navber from '../Shared/Header/Navber/Navber';
import Footer from '../Shared/Footer/Footer';

const Root = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <Navber></Navber>
            <Outlet>
            
            </Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;