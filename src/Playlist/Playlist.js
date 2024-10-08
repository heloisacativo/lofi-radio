import React, { useEffect, useState } from "react";
import "../Playlist/Playlist.css";
import background from "../assets/background.png";
import { ExploreView } from "../components/ExploreView/ExploreView";
import Search from "../Search/Search";
import axios from "axios";


const Playlist = () => {
    
    const [songs, setSongs] = useState([]);
    const [images, setImages] = useState([]);

    const updateImages = (newImages) => {
        setImages(newImages);
    }

    useEffect(() => {
        const fetchSongs = async () => {
            const response = await axios.get("http://localhost:3000/songs");
            const songData = response.data.map(song => ({
                id: song.song_id,
                label: song.title,
                audioUrl: song.url
            }));
            setSongs(songData);

        }
        fetchSongs();
    }, [songs]);

    const deleteSong = async (id) => {
        await axios.delete(`http://localhost:3000/songs/${id}`)
        setSongs((prevSongs) => prevSongs.filter(song => song.id !== id));

    }

    return (  
    <>
    <div className="backgroundImage">
    <img src={background} alt=""/>   
    </div>
            <div className="playlistContainer">
                <Search updateImages={updateImages}/>
                <div id="result-playlists">
                    <div className="playlist">     
                        </div>  
                <ExploreView 
                images={songs}
                deleteSong={deleteSong}
                />
                </div>
            </div>
            
    </>
    )
}


export default Playlist;


