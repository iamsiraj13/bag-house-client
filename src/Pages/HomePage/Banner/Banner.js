import React from 'react';
import { Link } from 'react-router-dom';
import banerBg from '../../../image/banner.jpg'
const Banner = () => {
    const bg = {
        background: `url(${banerBg})`,
        height: '450px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundBlendMode: 'darken'

    }
    return (
        <div style={bg}>
            <div className="text-center">
                <h2 style={{ fontSize: '60px', color: '#fff', backgroundColor: '#000' }}>Welcome To Our Bag House</h2>
                <Link to="/explore"><button className="btn btn-primary mt-3 ">Explore Now</button></Link>
            </div>
        </div>
    );
};

export default Banner;