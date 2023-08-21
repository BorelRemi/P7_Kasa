import React from 'react';
import "../css/footer.css"
import footer_logo from "../images/small_logo.png"


function Footer() {
    return (
        <div className="footer">
            <img className='footer_logo' src={footer_logo} alt=" kasa"/>
            <p>2020 Kasa. All rights reserved</p>
           
        </div>
    )     
}
export default Footer