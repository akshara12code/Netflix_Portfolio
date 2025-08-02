import React from 'react';
import './Blogs.css';
import { FaMedium, FaDev } from 'react-icons/fa';

const blogs = [
  {
    title: "WOMEN IN TECH",
    platform: "Medium",
    icon: <FaMedium />,
    link: "https://drive.google.com/file/d/1LOoY0Ro3F_mhC2JMCoUJwhY4DLZaVjoL/view?usp=sharing",
    description: "A celebration of the brilliant women who are shaping the future of technology. From pioneering software engineers and innovative entrepreneurs to leading researchers and visionary designers, women continue to break barriers and drive technological advancement across all industries.",
  },
  {
    title: "THE DIGITAL WORLD",
    platform: "Medium",
    icon: <FaMedium />,
    link: "https://drive.google.com/file/d/1C9vVnXLZFXaNlS6TxwdPR9HTdT1DZo5I/view?usp=sharing",
    description: "An interconnected universe where technology shapes every aspect of our lives. From social media and cloud computing to artificial intelligence and virtual reality, explore how digital innovation transforms the way we work, communicate, learn, and experience the world around us.",
  },
  {
    title: "UNLOCKING AI: ADVANCING HUMANITY",
    platform: "Dev.to",
    icon: <FaDev />,
    link: "https://drive.google.com/file/d/1yCINtnJeEjcC7fTgnQwRd1rjmDFkNnH0/view?usp=sharing",
    description: "Exploring how artificial intelligence is revolutionizing healthcare, education, scientific research, and social progress. From diagnosing diseases faster than ever before to personalizing learning experiences and solving complex global challenges, AI is becoming humanity's most powerful tool for creating a better future for all.",
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
