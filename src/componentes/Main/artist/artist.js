import React, { useEffect, useState } from "react";
import "./artist.css";

const Artist = ({ searchInput }) => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/artists?name_like=${searchInput}`;

    fetch(url)
      .then((response) => response.json())
      .then((res) => setArtists(res));
  }, [searchInput]);

  console.log(artists);

  return (
    <div id="result-artist">
      <div className="grid-container">
        {artists.map((artist) => (
          <div className="artist-card">
            <div className="card-img">
              <img id="artist-img" className="artist-img" src={artist.urlImg} />
              <div className="play">
                <span className="fa fa-solid fa-play"></span>
              </div>
            </div>
            <div className="card-text">
              <a title={artist.name} className="artist-link" href="">
                <span className="artist-name" id="artist-name">
                  {artist.name}
                </span>
                <span className="artist-categorie">Artista</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Artist;
