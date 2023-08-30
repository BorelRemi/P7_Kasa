import React from "react";
import { useState } from "react";
import "../css/collapse.css"
import arrowUp from"../images/arrow_up2.png"
import arrowDown from"../images/arrow_down.png"

function Collapse(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapse">
            <div className="collapse__header" onClick={toggleCollapse}>
                {props.header}
                <img
                    className={`arrow ${isOpen ? 'up' : 'down'}`}
                    src={isOpen ? arrowUp : arrowDown}
                    alt={isOpen ? 'Flèche vers le haut' : 'Flèche vers le bas'}
                />
            </div>
            {isOpen && (
                <div className="collapse__content">
                    {props.children}
                </div>
            )}
        </div>
    );
}

export default Collapse;