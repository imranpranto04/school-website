import React from 'react';
import Welcome from '../../WelcomeContent/Welcome';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div style={{background: '#E9E9E9'}}>
            <Navbar/>
            <Welcome/>
        </div>
    );
};

export default Home;