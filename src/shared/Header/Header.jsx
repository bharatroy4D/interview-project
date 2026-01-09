import React from 'react';
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

const Header = () => {
    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                
                {/* Logo */}
                <h1 className="text-2xl font-bold text-cyan-600">MyBrand</h1>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
                    <Link to="/" className="hover:text-cyan-600 transition">Home</Link>
                    <Link to="/abouts" className="hover:text-cyan-600 transition">About</Link>
                    <Link to="/contacts" className="hover:text-cyan-600 transition">Contact</Link>
                    <Link to="/login" className="hover:text-cyan-600 transition">Login</Link>
                    <Link to="/register" className="hover:text-cyan-600 transition">Register</Link>
                </nav>

                {/* Mobile Icon */}
                <div className="md:hidden">
                    <Menu className="w-7 h-7 text-gray-700" />
                </div>
            </div>
        </header>
    );
};

export default Header;
