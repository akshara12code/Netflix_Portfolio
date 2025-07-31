import React from 'react';
import './Music.css';
import albumCover1 from '../images/LDR.png'; // Hotel California by The Eagles
import albumCover2 from '../images/BTS.jpg'; // Back in Black by AC/DC
import albumCover3 from '../images/JN.jpg'; // Appetite for Destruction by Guns N' Roses

const favoriteGenres = ["Bollywood", "Classic Rock", "K-Pop", "Hollywood", "Pop", "Hip-Hop"];
const favoriteAlbums = [
  { title: "ULTRAVIOLENCE", artist: "Lana Del Rey", imgSrc: albumCover1 },
  { title: "Love Yourself", artist: "BTS", imgSrc: albumCover2 },
  { title: "RUBY", artist: "JENNIE", imgSrc: albumCover3 },
];

const Music: React.FC = () => {
  return (
    <div className="music-page">
      <div className="quote">
        <p>“Rock and Roll isn’t a genre, it’s a way of life.” 🎸</p>
      </div>

      <div className="genre-section">
        <h3>Explore by Genre</h3>
        <div className="genres">
          {favoriteGenres.map((genre, index) => (
            <div key={index} className="genre-card" style={{ animationDelay: `${index * 0.2}s` }}>
              <p>{genre}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="albums-section">
        <h3>Favorite Albums</h3>
        <div className="albums">
          {favoriteAlbums.map((album, index) => (
            <div key={index} className="album-card" style={{ animationDelay: `${index * 0.3}s` }}>
              <img src={album.imgSrc} alt={album.title} className="album-image" />
              <div className="album-details">
                <h4>{album.title}</h4>
                <p>by {album.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Music;
