import React from "react";
import '../css/banner.css'

function Banner(props){
    const {background} = props
    return(
        <div className={`banner ${background}`}>
        </div>
    )
}
export default Banner