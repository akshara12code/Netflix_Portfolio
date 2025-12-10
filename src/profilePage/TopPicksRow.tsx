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
    { title: "Skills", imgSrc: "https://imageio.forbes.com/specials-images/imageserve/630317507c39bc12ccfa8c6c/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds", icon: <FaCode />, route: "/skills" },
    { title: "Experience", imgSrc: "https://static1.squarespace.com/static/51a615dbe4b0643b1caad822/t/5e3d90a44e4fb2019c98c11e/1581093060738/customer+experience.jpg?format=1500w", icon: <FaBriefcase />, route: "/work-experience" },
    { title: "Certifications", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNIZtLblPcZGg3rhCBLqi7KNNvg7ayychRzw&s", icon: <FaCertificate />, route: "/certifications" },
    { title: "Recommendations", imgSrc: "https://i.pinimg.com/736x/a8/c1/8b/a8c18bc5dc8619eba15e30092c0dc20c.jpg", icon: <FaHandsHelping />, route: "/recommendations" },
    { title: "Projects", imgSrc: "https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg", icon: <FaProjectDiagram />, route: "/projects" },
    { title: "Contact Me", imgSrc: "https://www.shutterstock.com/image-vector/handshake-hands-business-suit-come-600nw-2337895625.jpg", icon: <FaEnvelope />, route: "/contact-me" }
  ],
  developer: [
    { title: "Skills", imgSrc: "https://imageio.forbes.com/specials-images/imageserve/630317507c39bc12ccfa8c6c/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds", route: "/skills", icon: <FaCode /> },
    { title: "Projects", imgSrc: "https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg", route: "/projects", icon: <FaProjectDiagram /> },
    { title: "Certifications", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNIZtLblPcZGg3rhCBLqi7KNNvg7ayychRzw&s", route: "/certifications", icon: <FaCertificate /> },
    { title: "Experience", imgSrc: "https://static1.squarespace.com/static/51a615dbe4b0643b1caad822/t/5e3d90a44e4fb2019c98c11e/1581093060738/customer+experience.jpg?format=1500w", route: "/work-experience", icon: <FaBriefcase /> },
    { title: "Recommendations", imgSrc: "https://i.pinimg.com/736x/a8/c1/8b/a8c18bc5dc8619eba15e30092c0dc20c.jpg", route: "/recommendations", icon: <FaHandsHelping /> },
    { title: "Contact Me", imgSrc: "https://www.shutterstock.com/image-vector/handshake-hands-business-suit-come-600nw-2337895625.jpg", route: "/contact-me", icon: <FaEnvelope /> }
  ],
  stalker: [
    { title: "Recommendations", imgSrc: "https://i.pinimg.com/736x/a8/c1/8b/a8c18bc5dc8619eba15e30092c0dc20c.jpg", route: "/recommendations", icon: <FaHandsHelping /> },
    { title: "Contact Me", imgSrc: "https://www.shutterstock.com/image-vector/handshake-hands-business-suit-come-600nw-2337895625.jpg", route: "/contact-me", icon: <FaEnvelope /> },
    { title: "Projects", imgSrc: "https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg", route: "/projects", icon: <FaProjectDiagram /> },
    { title: "Experience", imgSrc: "https://static1.squarespace.com/static/51a615dbe4b0643b1caad822/t/5e3d90a44e4fb2019c98c11e/1581093060738/customer+experience.jpg?format=1500w", route: "/work-experience", icon: <FaBriefcase /> },
    { title: "Certifications", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNIZtLblPcZGg3rhCBLqi7KNNvg7ayychRzw&s", route: "/certifications", icon: <FaCertificate /> },
  ],
  adventure: [
    { title: "Music", imgSrc: "https://i.pinimg.com/736x/7b/15/07/7b1507056b5efc480cc90b76b6bd153d.jpg", route: "/music", icon: <FaMusic /> },
    { title: "Projects", imgSrc: "https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg", route: "/projects", icon: <FaProjectDiagram /> },
    { title: "Reading", imgSrc: "https://i0.wp.com/wearerestless.org/wp-content/uploads/2021/02/Reading-scaled.jpg?resize=1155%2C770&ssl=1", route: "/reading", icon: <FaBook /> },
    { title: "Contact Me", imgSrc: "https://www.shutterstock.com/image-vector/handshake-hands-business-suit-come-600nw-2337895625.jpg", route: "/contact-me", icon: <FaEnvelope /> },
    { title: "Certifications", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNIZtLblPcZGg3rhCBLqi7KNNvg7ayychRzw&s", route: "/certifications", icon: <FaCertificate /> }
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
