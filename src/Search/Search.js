import React, { useState } from "react";
import "../Search/Search.css";
import search from "../assets/search.png";

function ArtistSearch() {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const [showResult, setShowResult] = useState(false);
  
    const handleInputChange = (event) => {
      const inputValue = event.target.value.toLowerCase();
      setSearchTerm(inputValue);
      if (inputValue === '') {
        setShowResult(false);
      } else {
        requestApi(inputValue);
      }
    };
  
    const requestApi = (searchTerm) => {
      fetch(`http://localhost:4000/artists?name_like=${searchTerm}`)
        .then((response) => response.json())
        .then((data) => {
          setResults(data);
          setShowResult(true);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    };
  
    const hidePlaylists = () => {
      setShowResult(false);
    };

  
    return (
        <div>
          <div className="header__search">
            <img src={search} alt="" />
            <input
              id="header__search"
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
            />
            {showResult && (
              <div>
                {results.map((artist, index) => (
                  <div key={index}>
                    <img src={artist.urlImg} alt="Artist" />
                    <p>{artist.name}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
    );
}

export default ArtistSearch;
