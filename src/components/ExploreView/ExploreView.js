import "./ExploreView.css"
import play from "../../assets/play-button.png";
import pause from "../../assets/play-left.png";
import { useRef, useState } from "react";

export const ExploreView = ({ images, deleteSong}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentAudioUrl, setCurrentAudioUrl] = useState(null);
    const radioUrl = "https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1&enablejsapi=1&origin=https%3A%2F%2Flofimusicradio.com&widgetid=1";

    const audioRef = useRef(new Audio(radioUrl));

    const handlePlayPause = (url) => {
        if (isPlaying && currentAudioUrl === url){
        audioRef.current.pause();
    } else {
        if(audioRef.current) {
            audioRef.current.pause();
        }
        audioRef.current = new Audio(url);
        audioRef.current.play();
    } 
    setIsPlaying(!isPlaying)
    setCurrentAudioUrl(url);
};


    return (
        <div className="exploreViewContainer">
                <div id="result-playlists">  
                    <div className="offerScrollContainer">
                    <h2 className="session">Rádio Lo-fi</h2>
                        <div className="offerList">
                            <section className="offerListItem">
                            {images.map((image, index) => (
                                <div className="cards" key={index}>
                                    <div className={`cards card${index + 1}`}>
                                        <span>{image.label}</span>
                                        
                                    </div>
                                    <div className="buttonDeleteSongContainer">
                                        <button className="buttonDelete" onClick={() => deleteSong(image.id)}>Deletar</button>
                                        </div>
                                    
                                    <div className="buttonsContainer">
            <img
            className="buttonPlay"
            src={isPlaying && currentAudioUrl === image.audioUrl ? pause : play}
            alt="" 
            onClick={() => handlePlayPause(image.audioUrl)}
            />
            {isPlaying && (
                    <iframe
                        id="youtube-player"
                        width="0"
                        height="0"
                        src={radioUrl}
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        title="Lofi Radio"
                        style={{ visibility: 'hidden', position: 'absolute' }}
                    ></iframe>
                )}
         </div>
                                </div>
                            ))} 
                            </section>
                        </div>
                    </div>
                </div>
            </div>
    )
}