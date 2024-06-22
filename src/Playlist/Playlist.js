import React from "react";
import "../Playlist/Playlist.css";
import card1 from "../assets/playlist/1.jpeg";
import card2 from "../assets/playlist/2.jpeg";
import card3 from "../assets/playlist/3.jpeg";
import card4 from "../assets/playlist/4.jpeg";
import background from "../assets/background.png";
import "./Media-query.css";

const Playlist = () => {
    return (     
            <div className="playlist-container">
                <img src={background} alt=""/>
                <div id="result-playlists">
                    <div className="playlist">
                        {/* <h1 id="greeting"></h1> */}
                        
                        </div>  
                    <div className="offer__scroll-container">
                    <h2 className="session">Rádio Lo-fi</h2>
                        <div className="offer__list">
                            <section className="offer__list-item">
                                
                                <a href="" className="cards">
                                    <div className="cards card1">
                                    <img src={card1} alt="" />
                                        <span>Estudar</span>
                                    </div>
                                </a>
                                
                                <a href="" className="cards">
                                    <div className="cards card2">
                                    <img src={card2} alt="" />
                                        <span>Concentar</span>
                                    </div>
                                </a>
                                
                                <a href="" className="cards">
                                    <div className="cards card3">
                                    <img src={card3} alt="" />
                                        <span>Relaxar</span>
                                    </div>
                                </a>
                                
                                <a href="" className="cards">
                                    <div className="cards card4">
                                    <img src={card4} alt="" />
                                        <span>Aleatória</span>
                                    </div>
                                </a>

  
                            </section>
                        </div>
                    </div>
                </div>
            </div>
    )
}


export default Playlist;


