import React, { useEffect, useRef, useState } from 'react';
import { BsTranslate } from 'react-icons/bs';
import { FiMenu } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const menuRef = useRef(null);
    // Close Menu clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])
    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

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
                {/* Mobile slide Menus */}
                <div
                    ref={menuRef}
                    className={`fixed top-0 right-0 w-[65%] h-screen flex flex-col gap-1 bg-black px-5 py-3
                    transform transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className='flex items-center justify-between mb-3'>
                        <h1 className='text-xl font-semibold'>Menu</h1>
                        <button onClick={() => setOpen(false)}>
                            <IoMdClose className='text-white' />
                        </button>
                    </div>
                    {
                        routes.map(route => (
                            <Link
                                key={route.path}
                                to={route.path}
                                className=' '>
                                {route.label}
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;