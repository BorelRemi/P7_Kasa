
import React from 'react';
import CardLogement from '../cardlogement/cardLogement';
import "./homeLogement.css"

function HomeLogement(){
    return(
        <div className='HomeLogement'>
            <CardLogement/>
            <CardLogement/>
            <CardLogement/>
            <CardLogement/>
            <CardLogement/>
            <CardLogement/>
        </div>

    )
}

export default HomeLogement