import React from 'react';
import Banner from "../Banner/Banner";
import Footer from "../../Shared/Footer/Footer";
import Navigation from '../../Shared/Navigation/Navigation';
import Service from '../Service/Service';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Service></Service>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;