import React from 'react';
import Carrousel from "../components/carrousel.jsx"

function Logement() {
    return(
    <div>
        <Carrousel className="carrousel"/>
        <div className='Logement'>
            <div className='logement__title'>
            <h2>Titre du logement</h2>
            <p>localisation</p>
            <ul>
                <li>cosy</li>
                <li>canal</li>
                <li>pariis 10</li>
            </ul>
            </div>
            <div className='Logement__profil'>
                <div>
                    <p>nom</p>
                </div>
                <div>
                    rate
                </div>
            </div>
            <div className='logement__description'>
                <div>
                    <h2>description</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo optio nihil molestias, eligendi repudiandae veniam beatae deserunt mollitia maxime! Soluta assumenda mollitia, voluptatum explicabo cum vel. Nihil ipsa deserunt enim.</p>
                </div>
                <div>
                    <h2>eqipement</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo optio nihil molestias, eligendi repudiandae veniam beatae deserunt mollitia maxime! Soluta assumenda mollitia, voluptatum explicabo cum vel. Nihil ipsa deserunt enim.</p>
                </div>
            </div>
            
            
        </div>
        
    </div>

    )
}

export default Logement