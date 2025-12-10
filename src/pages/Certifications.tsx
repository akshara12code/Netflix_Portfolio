import React, { useEffect, useState } from 'react';
import './Certifications.css';
import { FaExternalLinkAlt, FaUniversity, FaAws, FaMicrosoft } from 'react-icons/fa';
import { SiUdemy, SiCoursera, SiIeee, SiGoogle, SiMeta } from 'react-icons/si';
import { Certification } from '../types';

const iconData: { [key: string]: JSX.Element } = {
  'udemy': <SiUdemy />,
  'coursera': <SiCoursera />,
  'ieee': <SiIeee />,
  'university': <FaUniversity />,
  'aws': <FaAws />,
  'google': <SiGoogle />,
  'microsoft': <FaMicrosoft />,
  'meta': <SiMeta />
};

// Mock data - replace with actual API call
const mockCertifications: Certification[] = [
  {
    title: "Getting Started with Artificial Intelligence",
    issuer: "IBM SkillsBuild",
    issuedDate: "July 10, 2025",
    link: "https://www.credly.com/badges/60c1dbbf-6feb-4609-8d8c-4f16816300d5",
    iconName: "coursera"
  },
  {
    title: "AWS Academy Graduate - AWS Academy ML for NLP",
    issuer: "Amazon Web Services Training and Certification",
    issuedDate: "June 29, 2025",
    link: "https://www.credly.com/badges/395be47f-a2ee-4a63-a4d2-6398efb9da4a/public_url",
    iconName: "aws"
  },
  {
    title: "AWS Academy Graduate - AWS Academy Machine Learning Foundations",
    issuer: "Amazon Web Services Training and Certification",
    issuedDate: "June 29, 2025",
    link: "https://www.credly.com/badges/641aae4b-1dfc-4bd6-b799-f33f04d31156/public_url",
    iconName: "aws"
  },
  {
    title: "Prompt Design in Vertex AI Skill Badge",
    issuer: "Google Cloud",
    issuedDate: " December 01, 2024",
    link: "https://www.credly.com/badges/0808ecaa-8d9e-454b-99de-dde285531599/linked_in_profile",
    iconName: "google"
  },
  {
    title: "Responsive Web Design Certification",
    issuer: "freeCodeCamp",
    issuedDate: "February 13, 2024",
    link: "https://www.freecodecamp.org/certification/AksharaCODE/responsive-web-design",
    iconName: "coursera"
  },
  {
    title: "NPTEL: Cloud Computing Certification",
    issuer: "IIT Madras",
    issuedDate: "May 28, 2025",
    link: "https://drive.google.com/file/d/156Fq1qRL-gyFIavc-fxPYNnRDrzJgPnq/view?usp=sharing",
    iconName: "coursera"
  },
   {
    title: "Applied Machine Learning in Python",
    issuer: "University of Michigan",
    issuedDate: "December 6, 2025",
    link: "https://www.coursera.org/account/accomplishments/verify/FY5GD3DZRHY6",
    iconName: "coursera"
  },
  {
    title: "Postman API Fundamentals Student Expert ",
    issuer: "Postman",
    issuedDate: "September 14, 2024",
    link: "https://badgr.com/public/assertions/4ZzZSUylRUisuVtHigX-aA",
    iconName: "coursera"
  },
  {
    title: "MATLAB and Simulink Onramp",
    issuer: "MathWorks",
    issuedDate: "January 10, 2024",
    link: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=b9587b19-b47a-4887-acd1-67aa8ee7a951&",
    iconName: "udemy"
  },
   {
    title: "Google Cloud Innovators 2025",
    issuer: "Google for Developers",
    issuedDate: "July 3,2025",
    link: "https://developers.google.com/profile/badges/community/innovators/cloud/2021_member",
    iconName: "google"
  },
  {
    title: "Certificate of Participation in Invictus 2025",
    issuer: "Delhi Technological University",
    issuedDate: "March 12, 2025",
    link: "https://drive.google.com/file/d/1hm9IjS1cDt9Z_7HNaM_ypsgNT-Xu09ln/view?usp=sharing",
    iconName: "university"
  },
 
  {
    title: "Certificate of Participation Kharagpur Data Science Hackathon 2025",
    issuer: "IIT Kharagpur",
    issuedDate: "June 2024",
    link: "https://unstop.com/certificate-preview/0830ef3a-1e71-4e9a-8042-a4984f39b6cf?utm_campaign=",
    iconName: "university"
  },
  
];

const getCertifications = async (): Promise<Certification[]> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1200));
  return mockCertifications;
};

const Certifications: React.FC = () => {
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCertifications = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await getCertifications();
        setCertifications(data);
      } catch (err) {
        setError('Failed to load certifications. Please try again later.');
        console.error('Error fetching certifications:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCertifications();
  }, []);

  if (isLoading) {
    return (
      <div className="certifications-container">
        <div className="loading-state">
          <div className="loading-spinner"></div>
          <p>Loading certifications...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="certifications-container">
        <div className="error-state">
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (certifications.length === 0) {
    return (
      <div className="certifications-container">
        <div className="empty-state">
          <p>No certifications found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="certifications-container">
      <div className="certifications-header">
        <h2>Certifications & Achievements</h2>
        <p className="header-description">Professional certifications and educational accomplishments</p>
      </div>
      
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <a 
            href={cert.link} 
            key={`${cert.title}-${index}`}
            target="_blank" 
            rel="noopener noreferrer" 
            className="certification-card" 
            style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
          >
            <div className="certification-content">
              <div className="certification-icon">
                {iconData[cert.iconName] || <FaUniversity />}
              </div>
              <div className="certification-info">
                <h3 className="certification-title">{cert.title}</h3>
                <p className="certification-issuer">{cert.issuer}</p>
                <span className="issued-date">Issued {cert.issuedDate}</span>
              </div>
            </div>
            <div className="certification-link">
              <FaExternalLinkAlt className="external-link-icon" />
            </div>
          </a>
        ))}
      </div>
      
      <div className="certifications-footer">
        <p>Click on any certification to view the original credential</p>
      </div>
    </div>
  );
};

export default Certifications;