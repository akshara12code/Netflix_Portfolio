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
    { title: "Reading", imgSrc: "https://i0.wp.com/wearerestless.org/wp-content/uploads/2021/02/Reading-scaled.jpg?resize=1155%2C770&ssl=1", link: "/reading" },
    { title: "Blogs", imgSrc: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2022/06/How_To_Start_A_Blog_-_article_image.jpg", link: "/blogs" },
    { title: "Contact Me", imgSrc: "https://www.shutterstock.com/image-vector/handshake-hands-business-suit-come-600nw-2337895625.jpg", link: "/contact-me" }
  ],
  developer: [
    { title: "Music", imgSrc: "https://i.pinimg.com/736x/7b/15/07/7b1507056b5efc480cc90b76b6bd153d.jpg", link: "/music" },
    { title: "Reading", imgSrc: "https://i0.wp.com/wearerestless.org/wp-content/uploads/2021/02/Reading-scaled.jpg?resize=1155%2C770&ssl=1", link: "/reading" },
    { title: "Blogs", imgSrc: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2022/06/How_To_Start_A_Blog_-_article_image.jpg", link: "/blogs" },
    { title: "Certifications", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNIZtLblPcZGg3rhCBLqi7KNNvg7ayychRzw&s", link: "/certifications" },
    { title: "Contact Me", imgSrc: "https://www.shutterstock.com/image-vector/handshake-hands-business-suit-come-600nw-2337895625.jpg", link: "/contact-me" }
  ],
  stalker: [
    { title: "Reading", imgSrc: "https://i0.wp.com/wearerestless.org/wp-content/uploads/2021/02/Reading-scaled.jpg?resize=1155%2C770&ssl=1", link: "/reading" },
    { title: "Blogs", imgSrc: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2022/06/How_To_Start_A_Blog_-_article_image.jpg", link: "/blogs" },
    { title: "Contact Me", imgSrc: "https://www.shutterstock.com/image-vector/handshake-hands-business-suit-come-600nw-2337895625.jpg", link: "/contact-me" }
  ],
  adventure: [
    { title: "Music", imgSrc: "https://i.pinimg.com/736x/7b/15/07/7b1507056b5efc480cc90b76b6bd153d.jpg", link: "/music" },
    { title: "Reading", imgSrc: "https://i0.wp.com/wearerestless.org/wp-content/uploads/2021/02/Reading-scaled.jpg?resize=1155%2C770&ssl=1", link: "/reading" },
    { title: "Certifications", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNIZtLblPcZGg3rhCBLqi7KNNvg7ayychRzw&s", link: "/certifications" },
    { title: "Contact Me", imgSrc: "https://www.shutterstock.com/image-vector/handshake-hands-business-suit-come-600nw-2337895625.jpg", link: "/contact-me" }
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
