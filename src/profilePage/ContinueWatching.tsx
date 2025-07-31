import React from 'react';
import { Link } from 'react-router-dom';
import './ContinueWatching.css';

type ProfileType = 'recruiter' | 'developer' | 'stalker' | 'adventure';

interface ContinueWatchingProps {
  profile: ProfileType;
}

const continueWatchingConfig = {
  recruiter: [
    { title: "Music", imgSrc: "https://i.pinimg.com/736x/7b/15/07/7b1507056b5efc480cc90b76b6bd153d.jpg", link: "/music" },
    { title: "Reading", imgSrc: "https://i.pinimg.com/736x/39/62/71/3962717eb5048d7f67e242fb2e262afa.jpg", link: "/reading" },
    { title: "Blogs", imgSrc: "https://i.pinimg.com/736x/0e/e7/0b/0ee70b393deca697c5f961a021e766e9.jpg", link: "/blogs" },
    { title: "Contact Me", imgSrc: "https://i.pinimg.com/736x/f9/e9/4f/f9e94fa5dfbea15f98ff6da5da7ed453.jpg", link: "/contact-me" }
  ],
  developer: [
    { title: "Music", imgSrc: "https://i.pinimg.com/736x/7b/15/07/7b1507056b5efc480cc90b76b6bd153d.jpg", link: "/music" },
    { title: "Reading", imgSrc: "https://i.pinimg.com/736x/39/62/71/3962717eb5048d7f67e242fb2e262afa.jpg", link: "/reading" },
    { title: "Blogs", imgSrc: "https://i.pinimg.com/736x/0e/e7/0b/0ee70b393deca697c5f961a021e766e9.jpg", link: "/blogs" },
    { title: "Certifications", imgSrc: "https://i.pinimg.com/1200x/85/5d/0e/855d0edc1c183fcc4e8ff19a97962000.jpg", link: "/certifications" },
    { title: "Contact Me", imgSrc: "https://i.pinimg.com/736x/f9/e9/4f/f9e94fa5dfbea15f98ff6da5da7ed453.jpg", link: "/contact-me" }
  ],
  stalker: [
    { title: "Reading", imgSrc: "https://i.pinimg.com/736x/39/62/71/3962717eb5048d7f67e242fb2e262afa.jpg", link: "/reading" },
    { title: "Blogs", imgSrc: "https://i.pinimg.com/736x/0e/e7/0b/0ee70b393deca697c5f961a021e766e9.jpg", link: "/blogs" },
    { title: "Contact Me", imgSrc: "https://i.pinimg.com/736x/f9/e9/4f/f9e94fa5dfbea15f98ff6da5da7ed453.jpg", link: "/contact-me" }
  ],
  adventure: [
    { title: "Music", imgSrc: "https://i.pinimg.com/736x/7b/15/07/7b1507056b5efc480cc90b76b6bd153d.jpg", link: "/music" },
    { title: "Reading", imgSrc: "https://i.pinimg.com/736x/39/62/71/3962717eb5048d7f67e242fb2e262afa.jpg", link: "/reading" },
    { title: "Certifications", imgSrc: "https://i.pinimg.com/1200x/85/5d/0e/855d0edc1c183fcc4e8ff19a97962000.jpg", link: "/certifications" },
    { title: "Contact Me", imgSrc: "https://i.pinimg.com/736x/f9/e9/4f/f9e94fa5dfbea15f98ff6da5da7ed453.jpg", link: "/contact-me" }
  ]
};

const ContinueWatching: React.FC<ContinueWatchingProps> = ({ profile }) => {
  const continueWatching = continueWatchingConfig[profile];

  return (
    <div className="continue-watching-row">
      <h2 className="row-title">Continue Watching for {profile}</h2>
      <div className="card-row">
        {continueWatching.map((pick, index) => (
          <Link to={pick.link} key={index} className="pick-card">
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContinueWatching;
