import React from 'react';
import logements from '../data/logements.json'
import Banner from "../components/banner.jsx"
import Gallery from '../components/gallery';
import "../css/banner.css"

function Home() {
    return(
        <div>
        <Banner/>
        <h1 className="banner__title">Chez vous, partout et ailleurs</h1>
        <Gallery logements={logements}/>
        </div>
    )
}
export default Home;