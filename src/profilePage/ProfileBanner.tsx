import React, { useEffect, useState } from 'react';
import './ProfileBanner.css';
import PlayButton from '../components/PlayButton';
import MoreInfoButton from '../components/MoreInfoButton';
import { ProfileBanner as ProfileBannerType } from '../types';

// Mock profile banner data - replace with actual API call
const mockProfileBannerData: ProfileBannerType = {
  headline: "Front-End Developer & Machine Learning Enthusiast",
  profileSummary: "I am a passionate Front-End Developer with a strong foundation in building interactive and user-friendly web applications. Alongside my development skills, I'm also an enthusiastic learner in the field of Machine Learning, constantly exploring ways to integrate smart technologies into modern web solutions.",
  resumeLink: { 
    url: "https://www.canva.com/design/DAGZW9pDhY8/lrz7NK02Hxp_RCk24Z23Uw/edit?utm_content=DAGZW9pDhY8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" 
  },
  linkedinLink: "https://www.linkedin.com/in/akshara-srivastava-3572052a6/",
};

const getProfileBanner = async (): Promise<ProfileBannerType> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 800));
  return mockProfileBannerData;
};

const ProfileBanner: React.FC = () => {
  const [bannerData, setBannerData] = useState<ProfileBannerType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await getProfileBanner();
        setBannerData(data);
      } catch (err) {
        setError('Failed to load profile data. Please try again later.');
        console.error('Error fetching profile banner data:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handlePlayClick = () => {
    if (bannerData?.resumeLink?.url) {
      window.open(bannerData.resumeLink.url, '_blank');
    }
  };

  const handleLinkedinClick = () => {
    if (bannerData?.linkedinLink) {
      window.open(bannerData.linkedinLink, '_blank');
    }
  };

  if (isLoading) {
    return (
      <div className="profile-banner">
        <div className="banner-content">
          <div className="loading-state">
            <div className="loading-spinner"></div>
            <p>Loading profile...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="profile-banner">
        <div className="banner-content">
          <div className="error-state">
            <p>{error}</p>
          </div>
        </div>
      </div>
    );
  }

  if (!bannerData) {
    return (
      <div className="profile-banner">
        <div className="banner-content">
          <div className="empty-state">
            <p>No profile data available.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-banner">
      <div className="banner-content">
        <h1 className="banner-headline" id="headline">
          {bannerData.headline}
        </h1>
        <p className="banner-description">
          {bannerData.profileSummary}
        </p>
        <div className="banner-buttons">
          <PlayButton onClick={handlePlayClick} label="Resume" />
          <MoreInfoButton onClick={handleLinkedinClick} label="LinkedIn" />
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;