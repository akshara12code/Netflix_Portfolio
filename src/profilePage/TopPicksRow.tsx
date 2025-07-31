import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TopPicksRow.css';
import {  FaCode, FaBriefcase, FaCertificate, FaHandsHelping, FaProjectDiagram, FaEnvelope, FaMusic, FaBook } from 'react-icons/fa';

type ProfileType = 'recruiter' | 'developer' | 'stalker' | 'adventure';

interface TopPicksRowProps {
  profile: ProfileType;
}

const topPicksConfig = {
  recruiter: [
    // { title: "Work Permit", imgSrc: "https://picsum.photos/seed/workpermit/250/200", icon: <FaPassport />, route: "/work-permit" },
    { title: "Skills", imgSrc: "https://i.pinimg.com/736x/e0/bd/f4/e0bdf43169f365cc72cf86526cbdc650.jpg", icon: <FaCode />, route: "/skills" },
    { title: "Experience", imgSrc: "https://i.pinimg.com/736x/0e/7b/9c/0e7b9c140b021b6984a354b29f1fb1e8.jpg", icon: <FaBriefcase />, route: "/work-experience" },
    { title: "Certifications", imgSrc: "https://i.pinimg.com/1200x/85/5d/0e/855d0edc1c183fcc4e8ff19a97962000.jpg", icon: <FaCertificate />, route: "/certifications" },
    { title: "Recommendations", imgSrc: "https://i.pinimg.com/736x/a8/c1/8b/a8c18bc5dc8619eba15e30092c0dc20c.jpg", icon: <FaHandsHelping />, route: "/recommendations" },
    { title: "Projects", imgSrc: "https://i.pinimg.com/736x/9b/14/94/9b1494a48c1e0d8df0886ad879f769de.jpg", icon: <FaProjectDiagram />, route: "/projects" },
    { title: "Contact Me", imgSrc: "https://i.pinimg.com/736x/f9/e9/4f/f9e94fa5dfbea15f98ff6da5da7ed453.jpg", icon: <FaEnvelope />, route: "/contact-me" }
  ],
  developer: [
    { title: "Skills", imgSrc: "https://i.pinimg.com/736x/e0/bd/f4/e0bdf43169f365cc72cf86526cbdc650.jpg", route: "/skills", icon: <FaCode /> },
    { title: "Projects", imgSrc: "https://i.pinimg.com/736x/9b/14/94/9b1494a48c1e0d8df0886ad879f769de.jpg", route: "/projects", icon: <FaProjectDiagram /> },
    { title: "Certifications", imgSrc: "https://i.pinimg.com/1200x/85/5d/0e/855d0edc1c183fcc4e8ff19a97962000.jpg", route: "/certifications", icon: <FaCertificate /> },
    { title: "Experience", imgSrc: "https://i.pinimg.com/736x/0e/7b/9c/0e7b9c140b021b6984a354b29f1fb1e8.jpg", route: "/work-experience", icon: <FaBriefcase /> },
    { title: "Recommendations", imgSrc: "https://i.pinimg.com/736x/a8/c1/8b/a8c18bc5dc8619eba15e30092c0dc20c.jpg", route: "/recommendations", icon: <FaHandsHelping /> },
    { title: "Contact Me", imgSrc: "https://i.pinimg.com/736x/f9/e9/4f/f9e94fa5dfbea15f98ff6da5da7ed453.jpg", route: "/contact-me", icon: <FaEnvelope /> }
  ],
  stalker: [
    { title: "Recommendations", imgSrc: "https://i.pinimg.com/736x/a8/c1/8b/a8c18bc5dc8619eba15e30092c0dc20c.jpg", route: "/recommendations", icon: <FaHandsHelping /> },
    { title: "Contact Me", imgSrc: "https://i.pinimg.com/736x/f9/e9/4f/f9e94fa5dfbea15f98ff6da5da7ed453.jpg", route: "/contact-me", icon: <FaEnvelope /> },
    { title: "Projects", imgSrc: "https://i.pinimg.com/736x/9b/14/94/9b1494a48c1e0d8df0886ad879f769de.jpg", route: "/projects", icon: <FaProjectDiagram /> },
    { title: "Experience", imgSrc: "https://i.pinimg.com/736x/0e/7b/9c/0e7b9c140b021b6984a354b29f1fb1e8.jpg", route: "/work-experience", icon: <FaBriefcase /> },
    { title: "Certifications", imgSrc: "https://i.pinimg.com/1200x/85/5d/0e/855d0edc1c183fcc4e8ff19a97962000.jpg", route: "/certifications", icon: <FaCertificate /> },
  ],
  adventure: [
    { title: "Music", imgSrc: "https://i.pinimg.com/736x/7b/15/07/7b1507056b5efc480cc90b76b6bd153d.jpg", route: "/music", icon: <FaMusic /> },
    { title: "Projects", imgSrc: "https://i.pinimg.com/736x/9b/14/94/9b1494a48c1e0d8df0886ad879f769de.jpg", route: "/projects", icon: <FaProjectDiagram /> },
    { title: "Reading", imgSrc: "https://i.pinimg.com/736x/39/62/71/3962717eb5048d7f67e242fb2e262afa.jpg", route: "/reading", icon: <FaBook /> },
    { title: "Contact Me", imgSrc: "https://i.pinimg.com/736x/f9/e9/4f/f9e94fa5dfbea15f98ff6da5da7ed453.jpg", route: "/contact-me", icon: <FaEnvelope /> },
    { title: "Certifications", imgSrc: "https://i.pinimg.com/1200x/85/5d/0e/855d0edc1c183fcc4e8ff19a97962000.jpg", route: "/certifications", icon: <FaCertificate /> }
  ]
};


const TopPicksRow: React.FC<TopPicksRowProps> = ({ profile }) => {
  const navigate = useNavigate();
  const topPicks = topPicksConfig[profile];

  return (
    <div className="top-picks-row">
      <h2 className="row-title">Today's Top Picks for {profile}</h2>
      <div className="card-row">
      {topPicks.map((pick, index) => (
          <div 
            key={index} 
            className="pick-card" 
            onClick={() => navigate(pick.route)}
            style={{ animationDelay: `${index * 0.2}s` }} // Adding delay based on index
          >
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPicksRow;
