// Reading.tsx
import React, { useState } from 'react';
import './Reading.css';
import atomicHabits from '../images/atomic_habits.jpg';
import richDadPoorDad from '../images/TLMP.jpg';
import alchemist from '../images/alchemist.jpg';
import eatThatFrog from '../images/Verity.jpg';
import vijayanikiAidhuMetlu from '../images/ikigai.jpg';

const books = [
  {
    title: "The Last Mrs Parrish",
    author: "Liv Constantine",
    imgSrc: atomicHabits,
    description: "A psychological thriller about a woman who becomes entangled in a web of deceit and betrayal.",
    rating: "4.2",
    genre: "Thriller"
  },
  {
    title: "POWER",
    author: "Robert Greene",
    imgSrc: richDadPoorDad,
    description: "A guide to understanding the dynamics of power and how to navigate it effectively.",
    rating: "4.5",
    genre: "Self-Help"
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    imgSrc: alchemist,
    description: "A magical journey of following one's dreams.",
    rating: "4.7",
    genre: "Fiction"
  },
  {
    title: "Verity",
    author: "Colleen Hoover",
    imgSrc: eatThatFrog,
    description: "A psychological thriller about a struggling writer who discovers a hidden manuscript.",
    rating: "4.3",
    genre: "Thriller"
  },
  {
    title: "IKIGAI",
    author: "Héctor García and Francesc Miralles",
    imgSrc: vijayanikiAidhuMetlu,
    description: "A guide to finding purpose and meaning in life.",
    rating: "4.1",
    genre: "Philosophy"
  },
];

const Reading: React.FC = () => {
  const [hoveredBook, setHoveredBook] = useState<number | null>(null);

  return (
    <div className="netflix-reading-container">
      <div className="netflix-header">
        <h1 className="netflix-title">📚 My Reading Collection</h1>
        <h2 className="netflix-subtitle">Books That Shaped My Journey</h2>
        <p className="netflix-description">
          Discover the stories, insights, and wisdom that have influenced my perspectives, 
          motivation, and personal growth. Each book offers a unique journey worth exploring.
        </p>
      </div>

      <div className="books-section">
        <div className="books-row">
          {books.map((book, index) => (
            <div 
              key={index} 
              className="book-card"
              onMouseEnter={() => setHoveredBook(index)}
              onMouseLeave={() => setHoveredBook(null)}
            >
              <div className="book-cover-container">
                <img src={book.imgSrc} alt={book.title} className="book-cover" />
                <div className="play-button">
                  <div className="play-icon"></div>
                </div>
                <div className="gradient-overlay"></div>
              </div>
              
              <div className="book-info">
                <div className="book-header">
                  <h3 className="book-title">{book.title}</h3>
                  <div className="book-rating">
                    <span className="star">★</span>
                    <span>{book.rating}</span>
                  </div>
                </div>
                
                <div className="book-meta">
                  <span className="book-author">{book.author}</span>
                  <span className="book-genre">{book.genre}</span>
                </div>
                
                <p className="book-description">{book.description}</p>
                
                <div className="action-buttons">
                  <button className="btn btn-primary">
                    <span>▶</span> Read Now
                  </button>
                  <button className="btn btn-secondary">
                    <span>+</span> My List
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reading;