import React from "react";
import './Header.css';
import smallRight from '../assets/small-right.png';
import smallLeft from  '../assets/small-left.png';


const Header = ({imageSearch, searchTerm, onChange, ...props}) => {
    return (   
        <nav className="headerNavigation">
                <div className="navigation">
                    <button className="arrowLeft">
                        <img src={smallLeft} alt="" />
                    </button>
                    <button className="arrowRight">
                    <img src={smallRight} alt="" />
                    </button>                  
                </div>
                <div className="headerSearch">
                <img src={imageSearch} alt="" />
                <input
                id={props.id}
                type={props.type}
                value={searchTerm}
                onChange={onChange}
                />
                </div>
                <div className="headerLogin">
                    <button className="login">Entrar</button>
                </div>
            </nav>
            
    )
};


export default Header;