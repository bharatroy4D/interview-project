import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const routes = [
    { path: "/", label: "Home" },
    { path: "/abouts", label: "About" },
    { path: "/contacts", label: "Contact" },
    { path: "/login", label: "Login" },
];

const Header = () => {
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);

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

    return (
        <header className="absolute w-full z-50">
            <div className="container mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">

                {/* Logo */}
                <h1 className="text-3xl font-extrabold tracking-tight text-white">
                    MyBrand
                </h1>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-8 text-white font-medium">
                    {routes.map((route) => (
                        <Link
                            key={route.path}
                            to={route.path}
                            className="hover:text-cyan-400 transition-all duration-300 hover:scale-105"
                        >
                            {route.label}
                        </Link>
                    ))}

                    <Link
                        to="/register"
                        className="px-4 py-2 rounded-md bg-cyan-600 hover:bg-cyan-700 transition-all duration-300 shadow"
                    >
                        Register
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 rounded-md border border-gray-300 bg-white/20 hover:bg-white/30 backdrop-blur transition"
                    onClick={() => setOpen(!open)}
                >
                    {open ? (
                        <X className="w-6 h-6 text-white" />
                    ) : (
                        <Menu className="w-6 h-6 text-white" />
                    )}
                </button>

                {/* Right → Left Slide Sidebar */}
                <div
                    ref={menuRef}
                    className={`
                        fixed top-0 right-0 h-full w-64 
                        bg-black/90 backdrop-blur-md text-white p-5 
                        flex flex-col gap-5 shadow-xl 
                        transform transition-transform duration-300
                        ${open ? "translate-x-0" : "translate-x-full"}
                    `}
                >
                    {/* Top Close Row */}
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold">Menu</h2>

                        {/* Close Icon */}
                        <button onClick={() => setOpen(false)}>
                            <X className="w-7 h-7 text-white hover:text-cyan-400 transition" />
                        </button>
                    </div>

                    {/* Menu Items */}
                    {routes.map((route) => (
                        <Link
                            key={route.path}
                            to={route.path}
                            className="hover:text-cyan-400 transition-all"
                            onClick={() => setOpen(false)}
                        >
                            {route.label}
                        </Link>
                    ))}

                    {/* Register Button */}
                    <Link
                        to="/register"
                        onClick={() => setOpen(false)}
                        className="px-4 py-2 rounded-md bg-cyan-600 hover:bg-cyan-700 transition-all text-center"
                    >
                        Register
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
