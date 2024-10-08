import React, { useEffect, useState } from "react";
import { allSongs } from "../api/songs";
import "../Search/Search.css";
import search from "../assets/search.png";
import { ExploreView } from "../components/ExploreView/ExploreView";
import Header from "../Header/Header";

function Search({ updateImages }) {
    const [songs, setSongs] = useState([])
    const [searchTerm, setSearchTerm] = useState('');
    const [showResult, setShowResult] = useState(false);

    useEffect(() => {
      const fetchSongs = async () => {
        const songsData = await allSongs();
        setSongs(songsData);
      }
      fetchSongs();
    }, [])

    const handleInputChange = (event) => {
      const inputValue = event.target.value.toLowerCase();
      setSearchTerm(inputValue);
      if (inputValue === '') {
        setShowResult(false);
      } else {
        setShowResult(true);
      }
    };

    return (
        <div>
        <Header
          imageSearch={search}
          id="headerSearch"
          type="text"
          searchTerm={searchTerm}
          onChange={handleInputChange}
        />

        {showResult && songs.length > 0 && (
          <ExploreView
            images={songs
            .filter(song => song.title.toLowerCase().includes(searchTerm))
            .map(song => ({
              label: song.title
            }))}
          />
        )}
          </div>
        );
}

export default Search;
