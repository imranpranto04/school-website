import React from 'react';
import Events from '../../Events/Events';
import Welcome from '../../WelcomeContent/Welcome';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div style={{background: '#E9E9E9'}}>
            <Navbar/>
            <Welcome/>
            <Events/>
        </div>
    );
};

export default Home;