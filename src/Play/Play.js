import React from "react";
import "../Play/Play.css";
import play from "../assets/play-button.png";
import leftPlay from "../assets/play-left.png";
import rightPlay from "../assets/play-right.png";
import "./Media-query.css";
const Play = () => {
    return (
         <section className="background_container">
            <div className="button_play">
            <img src={play} alt="" />
            
            </div>
            <div className="button_left">
            <img src={leftPlay} alt="" />
            
            </div>
            <div className="button_right">
            <img src={rightPlay} alt="" />
            
            </div>
         </section>
    )
}


export default Play;