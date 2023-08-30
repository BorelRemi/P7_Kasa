
import React from 'react';
import Card from './card';
import "../css/gallery.css"
import { Link } from 'react-router-dom';

function Gallery(props){
    return(
        <div className='gallery'>
            {props.logements.map (logement =>

            <Link key={logement.id} to={`/Logement/${logement.id}`}>
                <Card cover={logement.cover} title={logement.title} description={logement.description} />
            </Link>
            )} 
        </div>
    )
}
export default Gallery