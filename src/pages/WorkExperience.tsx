import React, { useEffect, useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineWork as WorkIcon } from 'react-icons/md';
import { IoSchool as SchoolIcon } from 'react-icons/io5';
import { FaStar as StarIcon } from 'react-icons/fa';
import './WorkExperience.css';
import { TimelineItem } from '../types';

// Mock timeline data - replace with actual API call
const mockTimelineData: TimelineItem[] = [
  {
    title: "Machine Learning Project Intern",
    name: "All India Council for Technical Education (AICTE)",
    dateRange: "January 2025 - February 2025",
    timelineType: "work",
    techStack: "Python, Machine Learning, Data Analysis",
    summaryPoints: [
      "Built a machine learning system during my AICTE internship to recommend optimal crops and fertilizers.",
      "Analyzed soil data, weather, and crop needs to deliver personalized suggestions.",
      "Helped farmers boost yield and promote sustainable agriculture."
    ]
  },
  {
    title: "Core Member Content Team",
    name: "Open-Source Club VIT Bhopal",
    dateRange: "Jul 2024 - Present (1 yr 1 mo)",
    timelineType: "work",
    techStack: "Team Management, Content Management",
    summaryPoints: [
      "Managed content creation pipelines and ensured timely delivery for the Open-Source Club.",
      "Coordinated and supported content teams, fostering a collaborative environment.",
      "Contributed to strategic content planning to promote open-source initiatives."
    ]
  },
  {
    title: "Core Member Content Team",
    name: "Google Developers Groups VIT Bhopal",
    dateRange: "Dec 2024 - Present (8 mos)",
    timelineType: "work",
    techStack: "Google Workspace",
    summaryPoints: [
      "Managed and produced content using Google Workspace tools for Google Developers Groups VIT Bhopal.",
      "Supported community initiatives through effective content dissemination.",
      "Utilized collaborative tools to streamline content development workflows."
    ]
  },
  {
    title: "Core Member Content Team",
    name: "Android Club - VIT Bhopal",
    dateRange: "Dec 2024 - Present (8 mos)",
    timelineType: "work",
    techStack: "Digital Content, Content Creation",
    summaryPoints: [
      "Created and curated engaging digital content for the Android Club.",
      "Contributed to the development of club's online presence and educational resources.",
      "Collaborated with club members to enhance content quality and outreach."
    ]
  },
  {
    title: "Bachelor of Technology in Computer Science",
    name: "Vellore Institute of Technology, Bhopal",
    dateRange: "September 2023 - present",
    timelineType: "education",
    techStack: "Operating Systems, Data Structures, Algorithms, Database Management Systems, Computer Networks",
    summaryPoints: [
      "Comprehensive study of core computer science concepts, including algorithms, data structures, operating systems, and software development",
      "Active leadership as head of the university coding club, organizing and managing hackathons and technical workshops",
      "Achieved strong academic performance, graduating with Magna Cum Laude honors and maintaining a 3.7 GPA"
    ]
  },
  {
    title: "Secondary High School",
    name: "URMI School, Vadodara",
    dateRange: "August 2021 - May 2023",
    timelineType: "education",
    techStack: "Disciplinary Head, Mathematics, Physics, Chemistry, English",
    summaryPoints: [
      "Intensive study of Core Engineering subjects, including Mathematics, Physics, and Chemistry",
      "Led the school's disciplinary committee, ensuring a positive and respectful learning environment",
      "Graduated with a focus on STEM subjects, achieving 80% in Boards examinations"
    ]
  }
];

const getTimeline = async (): Promise<TimelineItem[]> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1200));
  return mockTimelineData;
};

const NetflixTimeline: React.FC = () => {
  const [timeLineData, setTimeLineData] = useState<TimelineItem[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTimelineItem = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await getTimeline();
        setTimeLineData(data);
      } catch (err) {
        setError('Failed to load timeline data. Please try again later.');
        console.error('Error fetching timeline:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTimelineItem();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading your story...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="text-center">
          <p className="text-red-400 text-lg">{error}</p>
        </div>
      </div>
    );
  }

  if (!timeLineData || timeLineData.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="text-center">
          <p className="text-white text-lg">No timeline data available.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            {/* My{' '} */}
            {/* <span className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent"> */}
              {/* Story */}
            {/* </span> */}
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            {/* A journey through experience and education */}
          </p>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>
        
        {/* Vertical Timeline */}
        <VerticalTimeline>
          {timeLineData.map((item, index) => (
            <VerticalTimelineElement
              key={`${item.name}-${index}`}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: 'rgba(15, 15, 15, 0.95)',
                color: '#fff',
                border: '1px solid #e50914',
                borderRadius: '10px',
                marginBottom: '20px',
                marginTop: '40px',
                boxShadow: '0 4px 20px rgba(229, 9, 20, 0.3)'
              }}
              contentArrowStyle={{ borderRight: '7px solid #e50914' }}
              date={item.dateRange}
              dateClassName="text-red-400"
              iconStyle={{
                background: '#e50914',
                color: '#fff',
                boxShadow: '0 0 20px rgba(229, 9, 20, 0.6)'
              }}
              icon={item.timelineType === 'work' ? <WorkIcon /> : <SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title text-2xl font-bold mb-2">
                {item.timelineType === 'work' ? item.title : item.name}
              </h3>
              <h4 className="vertical-timeline-element-subtitle text-lg font-medium text-red-400 mb-4">
                {item.timelineType === 'work' ? item.name : item.title}
              </h4>
              
              {/* Tech Stack */}
              <div className="flex items-center mb-4 bg-gray-800 p-3 rounded-lg">
                <span className="mr-2">🛠️</span>
                <span className="text-gray-300 text-sm">{item.techStack}</span>
              </div>
              
              {/* Summary Points */}
              <div className="space-y-3">
                {item.summaryPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </VerticalTimelineElement>
          ))}
          
          {/* End Element */}
          <VerticalTimelineElement
            iconStyle={{
              background: 'linear-gradient(45deg, #e50914, #ffd700)',
              color: '#fff',
              boxShadow: '0 0 20px rgba(229, 9, 20, 0.8)'
            }}
            icon={<StarIcon />}
          />
        </VerticalTimeline>
        
        {/* Footer */}
        <div className="text-center mt-16">
          <p className="text-gray-400 text-lg italic">The story continues...</p>
        </div>
      </div>
    </div>
  );
};

export default NetflixTimeline;