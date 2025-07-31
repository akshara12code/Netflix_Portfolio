import React from 'react';
import './Recommendations.css';
import chrisProfilePic from '../images/sir image.jpg'; // Adjust the path based on your directory structure

const Recommendations: React.FC = () => {
  return (
    <div className='timeline-container'>
      <div className="recommendation-card">
        <div className="recommendation-header">
          <img src={chrisProfilePic} alt="Chris Smith" className="profile-pic" />
          <div>
            <h3>Dr Preetam Suman</h3>
            <p>Division Head - Network Computing (CSE)</p>
            <p className="date">July 28, 2025</p>
          </div>
        </div>
        <div className="recommendation-body">
          <p> "I am delighted to recommend Akshara Srivastava (23BAI10585), currently a student of the
Computer Science and Engineering with specialization in Artificial Intelligence and Machine
Learning at Vellore Institute of Technology, Bhopal."</p>
          <p className="ya1">As her Mentor throughout the entire
second year and part of the third year, I have closely observed her academic progress,
commitment, and personal growth.Akshara consistently exhibits strong academic aptitude and a true passion for computer
science, particularly in machine learning and artificial intelligence. Maintaining an excellent
academic record and attendance, she actively participates in technical workshops, seminars,
and demonstrates admirable curiosity and perseverance.</p>
          <p>A highlight of her achievements is
the successful publication of a research paper on “Brain Cancer Detection Systems Using
Ai—A Testament” to her technical competence and dedication.
Additionally, Akshara shines as both a team player and a leader, frequently collaborating with
peers on group projects and helping guide fellow students with clarity and maturity.</p>
          <p>She is
highly responsible, disciplined, and balanced in approach, qualities that make her stand out
among her peers.
I recommend Akshara Srivastava without reservation and am certain she will excel in any
future endeavour.</p>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
