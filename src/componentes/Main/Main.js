import React from "react";
import "./Main.css";
import Artist from "./artist/artist";

import image1 from "../../assets/playlist/1.jpeg";
import image2 from "../../assets/playlist/2.png";
import image3 from "../../assets/playlist/3.jpeg";
import image4 from "../../assets/playlist/4.jpeg";
import image5 from "../../assets/playlist/5.jpeg";
import image6 from "../../assets/playlist/6.jpeg";
import image7 from "../../assets/playlist/7.jpeg";
import image8 from "../../assets/playlist/8.jpeg";
import image9 from "../../assets/playlist/9.jpeg";
import image10 from "../../assets/playlist/10.jpeg";
import image11 from "../../assets/playlist/11.jpeg";
import image12 from "../../assets/playlist/12.jpeg";
import image13 from "../../assets/playlist/13.jpeg";
import image14 from "../../assets/playlist/14.jpeg";
import image15 from "../../assets/playlist/15.jpeg";

const Main = ({ searchInput }) => {
  const getGreeting = () => {
    const localTime = new Date();

    const hours = localTime.getHours();

    if (hours >= 6 && hours < 12) {
      return "Bom dia";
    } else if (hours >= 12 && hours < 18) {
      return "Boa tarde";
    } else {
      return "Boa noite";
    }
  };

  return (
    <div className="playlist-container">
      {searchInput ? (
        <Artist searchInput={searchInput} />
      ) : (
      <div id="result-playlists">
        <div className="playlist">
          <h1 id="greeting">{getGreeting()}</h1>
          <h2 className="session">Navegar por todas as seções</h2>
        </div>
        <div className="offer__scroll-container">
          <div className="offer__list">
            <section className="offer__list-item">
              <a href="" className="cards">
                <div className="cards card1">
                  <img src={image1} alt="" />
                  <span>Boas festas</span>
                </div>
              </a>
              <a href="" className="cards">
                <div className="cards card2">
                  <img src={image2} alt="" />
                  <span>Feitos para você</span>
                </div>
              </a>
              <a href="" className="cards">
                <div className="cards card3">
                  <img src={image3} alt="" />
                  <span>Lançamentos</span>
                </div>
              </a>
              <a href="" className="cards">
                <div className="cards card4">
                  <img src={image4} alt="" />
                  <span>Creators</span>
                </div>
              </a>
              <a href="" className="cards">
                <div className="cards card5">
                  <img src={image5} alt="" />
                  <span>Para treinar</span>
                </div>
              </a>
              <a href="" className="cards">
                <div className="cards card6">
                  <img src={image6} alt="" />
                  <span>Podcasts</span>
                </div>
              </a>
              <a href="" className="cards">
                <div className="cards card7">
                  <img src={image7} alt="" />
                  <span>Sertanejo</span>
                </div>
              </a>
              <a href="" className="cards">
                <div className="cards card8">
                  <img src={image8} alt="" />
                  <span>Samba e pagode</span>
                </div>
              </a>
              <a href="" className="cards">
                <div className="cards card9">
                  <img src={image9} alt="" />
                  <span>Funk</span>
                </div>
              </a>
              <a href="" className="cards">
                <div className="cards card10">
                  <img src={image10} alt="" />
                  <span>MPB</span>
                </div>
              </a>
              <a href="" className="cards">
                <div className="cards card11">
                  <img src={image11} alt="" />
                  <span>Rock</span>
                </div>
              </a>
              <a href="" className="cards">
                <div className="cards card12">
                  <img src={image12} alt="" />
                  <span>Hip Hop</span>
                </div>
              </a>
              <a href="" className="cards">
                <div className="cards card13">
                  <img src={image13} alt="" />
                  <span>Indie</span>
                </div>
              </a>
              <a href="" className="cards">
                <div className="cards card14">
                  <img src={image14} alt="" />
                  <span>Relax</span>
                </div>
              </a>
              <a href="" className="cards">
                <div className="cards card15">
                  <img src={image15} alt="" />
                  <span>Música Latina</span>
                </div>
              </a>
            </section>
          </div>
        </div>
      </div>
      )}
      <div id="result-artist" className="hidden">
        <div className="grid-container">
          <div className="artist-card" id="">
            <div className="card-img">
              <img id="artist-img" className="artist-img" />
              <div className="play">
                <span className="fa fa-solid fa-play"></span>
              </div>
            </div>
            <div className="card-text">
              <a title="Foo Fighters" className="vst" href="">
                <span className="artist-name" id="artist-name"></span>
                <span className="artist-categorie">Artista</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
