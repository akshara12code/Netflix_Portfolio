import React, { useEffect, useState } from 'react';
import './ContactMe.css';
import profileImage from '../images/Photo-1.jpg';
import { FaEnvelope, FaPhoneAlt, FaCoffee, FaLinkedin } from 'react-icons/fa';
import { ContactMe as IContactMe } from '../types';

// Mock data - replace with actual API call
const mockContactData: IContactMe = {
  profilePicture: profileImage, // This is now just the image import
  name: "Akshara Srivastava",
  title: "Front-End Developer & Machine Learning Enthusiast",
  summary: "Passionate about creating innovative solutions and building scalable applications. I love working with modern technologies and collaborating with teams to deliver exceptional user experiences.",
  companyUniversity: "Vellore Institute of Technology, Bhopal",
  linkedinLink: "https://www.linkedin.com/in/akshara-srivastava-3572052a6/",
  email: "akshara12082005@gmail.com",
  phoneNumber: "91+ 8488944819"
};

const getContactMe = async (): Promise<IContactMe> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 800));
  return mockContactData;
};

const ContactMe: React.FC = () => {
  const [userData, setUserData] = useState<IContactMe | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await getContactMe();
        setUserData(data);
      } catch (err) {
        setError('Failed to load contact information. Please try again later.');
        console.error('Error fetching contact data:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (isLoading) {
    return (
      <div className="contact-container">
        <div className="loading-state">
          <div className="loading-spinner"></div>
          <p>Loading contact information...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="contact-container">
        <div className="error-state">
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="contact-container">
        <div className="empty-state">
          <p>No contact information available.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-container">
      <div className="contact-hero">
        <h2>Let's Connect!</h2>
        <p>I'm always excited to discuss new opportunities, collaborate on projects, or just have a friendly chat.</p>
      </div>

      <div className="linkedin-badge-custom">
        <div className="badge-image-container">
          {/* Changed from userData.profilePicture.url to just userData.profilePicture */}
          <img src={userData.profilePicture} alt={userData.name} className="badge-avatar" />
        </div>
        
        <div className="badge-content">
          <h3 className="badge-name">{userData.name}</h3>
          <p className="badge-title">{userData.title}</p>
          
          <p className="badge-description">{userData.summary}</p>
          <p className="badge-company">{userData.companyUniversity}</p>
          
          <a
            href={userData.linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            className="badge-link"
          >
            <FaLinkedin className="linkedin-icon" /> View Profile
          </a>
        </div>
      </div>

      <div className="contact-header">
        <p>I'm always up for a chat or a coffee! Feel free to reach out.</p>
      </div>

      <div className="contact-details">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href={`mailto:${userData.email}`} className="contact-link">
            {userData.email}
          </a>
        </div>
        
        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <a href={`tel:${userData.phoneNumber}`} className="contact-link">
            {userData.phoneNumber}
          </a>
        </div>

        <div className="contact-fun">
          <p>Or catch up over a coffee ☕</p>
          <FaCoffee className="coffee-icon" />
        </div>
      </div>

    </div>
  );
};

export default ContactMe;