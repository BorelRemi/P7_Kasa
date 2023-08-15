import React from 'react';
import { NavLink } from 'react-router-dom';
import "./header.css"
import logo from "../../images/logo.png"



function Header() {
    return (
        <div className="header">
            <div className='header__logo'>
                <img src={logo} alt="logo Kasa"/>
            </div>
            <div className='header__nav'>
            <NavLink to="/">Accueil</NavLink>
            <NavLink>A Propos</NavLink>
            </div> 
        </div>
    )     
}
export default Header