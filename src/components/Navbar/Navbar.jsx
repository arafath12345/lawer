import React from 'react';
import { NavLink } from 'react-router';
import './navbar.css';
import logo from '../../assets/logo.png'

const Navbar = () => {
    const navlinks = <>

        <li><NavLink to="/"><span>Home</span><span className='bottomer'></span></NavLink></li>
        <li><NavLink to="/booking"><span>My-Bookings</span><span className='bottomer'></span></NavLink></li>
        <li><NavLink to="/blogs"><span>Blogs</span><span className='bottomer'></span></NavLink></li>
        <li><NavLink to="/contact"><span>Contact Us</span><span className='bottomer'></span></NavLink></li>
        


    </>
    return (
        <div className="navbar ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            navlinks
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl font-bold "><img src={logo} alt=""  />Law.BD</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu text-base menu-horizontal px-1">
                   {
                    navlinks
                   }
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-green-400 text-white rounded-3xl">Contact Now</a>
            </div>
        </div>
    );
};

export default Navbar;