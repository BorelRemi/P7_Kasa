import React from 'react';
import logements from '../data/logements.json'
import Banner from "../components/banner/banner.jsx"
import HomeLogement from '../components/homeLogement/homeLogement';

function Home() {
    console.log(logements)
    return(
        <div>
        <Banner/>
        <HomeLogement/>
        </div>
       

    )
}
export default Home;