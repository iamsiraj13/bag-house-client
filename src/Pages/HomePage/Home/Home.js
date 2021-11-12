import React from 'react'; 
import Footer from '../../Shared/Footer/Footer';
import Nav from '../../Shared/Nav/Nav';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Nav></Nav>
            <Banner></Banner> 
            <Products></Products>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;