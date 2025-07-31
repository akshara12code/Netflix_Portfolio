import React from 'react';
import './Blogs.css';
import { FaMedium, FaDev } from 'react-icons/fa';

const blogs = [
  {
    title: "WOMEN IN TECH",
    platform: "Medium",
    icon: <FaMedium />,
    link: "https://drive.google.com/file/d/1LOoY0Ro3F_mhC2JMCoUJwhY4DLZaVjoL/view?usp=sharing",
    description: "Learn tips to customize your Rails console for a better experience.",
  },
  {
    title: "THE DIGITAL WORLD",
    platform: "Medium",
    icon: <FaMedium />,
    link: "https://drive.google.com/file/d/1C9vVnXLZFXaNlS6TxwdPR9HTdT1DZo5I/view?usp=sharing",
    description: "An introductory guide to Docker fundamentals from my perspective.",
  },
  {
    title: "UNLOCKING AI: ADVANCING HUMANITY",
    platform: "Dev.to",
    icon: <FaDev />,
    link: "https://drive.google.com/file/d/1yCINtnJeEjcC7fTgnQwRd1rjmDFkNnH0/view?usp=sharing",
    description: "A guide to using the Grape gem for API development in Ruby on Rails.",
  },
];

const Blogs: React.FC = () => {
  return (
    <div className="blogs-container">
      <h2 className="blogs-title">✍️ My Blog Posts</h2>
      <p className="blogs-intro">A collection of my thoughts and tutorials on rising technologies.</p>
      <div className="blogs-grid">
        {blogs.map((blog, index) => (
          <a href={blog.link} key={index} target="_blank" rel="noopener noreferrer" className="blog-card" style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}>
            <div className="blog-icon animated-icon">{blog.icon}</div>
            <div className="blog-info animated-text">
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-description">{blog.description}</p>
              <span className="blog-platform">{blog.platform}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
