import React from 'react';
import { Link } from 'react-router-dom';
import Error404 from "../images/big_404.png";
import "./error.css";

function Error() {
    return (
        <div className="error">
            <div className='error__description'>
                <img src={Error404} alt="erreur 404"/>
                <p>Oups! La page que vous demandez n'existe pas.</p>
            </div>
            <div>
            <Link className="error__link" to="/">Retourner à la page d'accueil</Link>
            </div> 
        </div>
    )     
}
export default Error