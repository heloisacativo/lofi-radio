import React, { useRef, useState } from "react";
import "../Play/Play.css";
import play from "../assets/play-button.png";
import pause from "../assets/play-left.png";
const Play = () => {

    const radioUrl = "https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1&enablejsapi=1&origin=https%3A%2F%2Flofimusicradio.com&widgetid=1";

    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    return (
         <section className="backgroundContainer">
         <div className="buttonsContainer">
            <img
            className="buttonPlay"
            src={isPlaying ? pause : play}
            alt="" 
            onClick={handlePlayPause}
            />
            {isPlaying && (
                    <iframe
                        id="youtube-player"
                        width="0"
                        height="0"
                        src={radioUrl}
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        title="Lofi Radio"
                        style={{ visibility: 'hidden', position: 'absolute' }}
                    ></iframe>
                )}
         </div>
         </section>
    )
}


export default Play;