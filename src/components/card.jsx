import React from 'react';
import '../css/card.css'

function Card(props){
    return(
        <div className='card'>
            <img src={props.cover} alt={props.description}/>
           <h2 className='card__title'>{props.title}</h2>
        </div>
    )
}
export default Card