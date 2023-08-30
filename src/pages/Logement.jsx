import React from 'react';
import Carousel from "../components/carousel.jsx"
import logements from "../data/logements.json"
import Collapse from '../components/collapse.jsx';
import { useParams } from 'react-router-dom';
import Error from './Error.jsx';
import "../css/logement.css"



function Logement(props) {
    const { id } = useParams();
      
    const logement =logements.find(logement => logement.id === id);

    if (!logement) {
        return(
            <Error/>
        ) ;
    }

    const maxStars = 5;
    const filledStars = [];
    const emptyStars = [];

    for (let i = 0; i < maxStars; i++) {
        if (i < logement.rating) {
            filledStars.push(<span className="star" key={`filled-${i}`}>★</span>);
        } else {
            emptyStars.push(<span className="star empty__star" key={`empty-${i}`}>★</span>);
        }
    }

    return(
    <div>
        <div className="carousel">
        <Carousel images={logement.pictures}/>
        </div>
        
        
        <div className='logement'>
            <div className='logement__details'>
                <div className='logement__title'>
                    <h2 >{logement.title}</h2>
                    <p>{logement.location}</p>
                    <ul>
                    {logement.tags.map((tag, index) => (
                                <li key={index}>{tag}</li>
                            ))}
                    </ul>
                </div>
                <div className='logement__host'>
                    <div className='logement__host--profil'>
                        <p>{logement.host.name}</p>
                        <img src={logement.host.picture} alt={logement.host.name} />
                    </div>
                <div className='stars'>
                    {filledStars} 
                    {emptyStars}  
                </div>
            </div>
            </div>
            
            <div className='logement__description'>
                <Collapse key={`description-${logement.id}`} header={<div>Description</div>} className="small__width">
                        <p>{logement.description}</p>
                </Collapse>
                <Collapse key={`equipments-${logement.id}`} header={<div>Equipements</div>} className="small__width">
                    <ul className='collapse__li'>
                        {logement.equipments.map((equipment, index) => (
                        <li key={index}>{equipment}</li>
                        ))}
                    </ul>
                </Collapse>
            </div>
        </div>      
    </div>

    )
}

export default Logement