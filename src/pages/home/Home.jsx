import React from 'react';
import Banner from './banner/Banner';
import Products from './products/Products';
import Navbar from './navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Banner />
            <Products/>
            {/* <Navbar/> */}
        </div>
    );
};

export default Home;