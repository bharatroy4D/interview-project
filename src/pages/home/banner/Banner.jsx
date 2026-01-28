import React from 'react';
import banner from '../../../assets/book-white-removebg-preview.png';

const Banner = () => {
    return (
        <section className="bg-gradient-to-br from-green-400 to-blue-300 py-20">
            <div className="container mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-10">

                {/* Left Content */}
                <div className="w-full md:w-1/2 text-white space-y-6">
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                        Learn Without Limits
                    </h1>

                    <p className="text-lg opacity-90">
                        Build your skill, grow your career and explore new learning opportunities with our online learning platform.
                    </p>

                    {/* Buttons */}
                    <div className="flex items-center gap-4">
                        <button className="px-6 py-3 bg-white text-cyan-700 font-semibold rounded-md shadow hover:bg-gray-200 transition-all">
                            Get Started
                        </button>

                        <button className="px-6 py-3 border border-white text-white font-semibold rounded-md hover:bg-white hover:text-cyan-700 transition-all">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Right Image */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <img 
                        src={banner} 
                        alt="Banner" 
                        className="w-72 md:w-2xl drop-shadow-2xl animate-floating"
                    />
                </div>
            </div>
        </section>
    );
};

export default Banner;
