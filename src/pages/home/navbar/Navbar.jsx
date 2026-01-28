import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { path: "/", label: "Home" },
        { path: "/abouts", label: "About" },
        { path: "/contacts", label: "Contact" },
        { path: "/login", label: "Login" },
    ];

    return (
        <div>
            <div className='container flex justify-between px-10 py-4'>
                {/* Logo */}
                <h1 className='text-2xl font-medium font-sans'>Logo</h1>
                {/* Desktop Menus */}
                <div className='hidden md:inline-flex items-center gap-7'>
                    {
                        routes.map(route => (
                            <Link
                                key={route.path}
                                to={route.path}
                                className='text-lg '>
                                {route.label}
                            </Link>
                        ))
                    }
                    <button className='btn btn-secondary'>Register</button>
                </div>
                {/* Mobile Menu Button */}
                <button className='md:hidden' onClick={() => setOpen(!open)}>
                    {open ? <IoMdClose className='text-xl' /> : <FiMenu className='text-xl' />}
                </button>
            </div>
        </div>
    );
};

export default Navbar;