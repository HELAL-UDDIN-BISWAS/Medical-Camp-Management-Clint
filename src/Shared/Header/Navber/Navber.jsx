import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/Provider';
import { FaUser } from "react-icons/fa";
import useTenstak from '../../../Hooks/useTenstak';


const Navber = () => {
    const { user, logout } = useContext(AuthContext)
    const [cart]=useTenstak()
    console.log(cart)
    const nav = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/availablecamps'>Available Camps</Link></li>
        <li><Link to='/contactUs'>Contact Us</Link></li>

    </>
    const handleLoagout = () => {
        logout()
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            nav
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        nav
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        {
                            user? <img style={{
                                backgroundImage: 'cover',
                                backgroundPosition: 'center'
                            }} src={user?.photoURL} />:<div className='flex text-2xl items-center justify-center text-center'> <FaUser /></div>
                          
                        }
                        
                    </div>
                </label>
                {
                    user?.email ? <button onClick={handleLoagout}>LogOut</button> :
                        <>
                        <Link to="login"><button className='btn'>login</button></Link>
                            <button  className='btn'><Link to='/register'>Register</Link></button>

                        </>
                }

            </div>
        </div>
    );
};

export default Navber;