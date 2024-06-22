import React from "react";
import './Header.css';
import smallRight from '../assets/small-right.png';
import smallLeft from  '../assets/small-left.png';

import "../Header/Media-query.css";
import ArtistSearch from "../Search/Search";

const Header = () => {
    return (
        
        <nav className="header__navigation">
                <div className="navigation">
                    <button className="arrow-left">
                        <img src={smallLeft} alt="" />
                    </button>
                    <button className="arrow-right">
                    <img src={smallRight} alt="" />
                    </button>                  
                </div>

                <div className="header__login">
                    <button className="login">Entrar</button>
                </div>
            </nav>
            
    )
};


export default Header;