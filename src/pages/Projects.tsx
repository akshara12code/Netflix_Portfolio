import React, { useEffect, useState } from 'react';
import './Projects.css';
import { FaReact, FaNodeJs, FaAws, FaDatabase, FaDocker, FaAngular, FaGithub, FaGitlab, FaGoogle, FaJava, FaJenkins, FaMicrosoft, FaPython, FaVuejs } from 'react-icons/fa';
import { SiRubyonrails, SiPostgresql, SiMongodb, SiMaterialdesign, SiHtml5, SiCss3, SiJquery, SiAwsamplify, SiFirebase, SiTerraform, SiArgo, SiTypescript, SiNextdotjs, SiExpress, SiRedis, SiTailwindcss, SiBootstrap } from 'react-icons/si';
import { Project } from '../types';
import { GrDeploy, GrKubernetes } from "react-icons/gr";

const techIcons: { [key: string]: JSX.Element } = {
  "ReactJS": <FaReact />,
  "NodeJS": <FaNodeJs />,
  "AWS": <FaAws />,
  "PostgreSQL": <SiPostgresql />,
  "MongoDB": <SiMongodb />,
  "Ruby On Rails": <SiRubyonrails />,
  "Material UI": <SiMaterialdesign />,
  "HTML5": <SiHtml5 />,
  "CSS3": <SiCss3 />,
  "jQuery": <SiJquery />,
  "AWS-ECS": <SiAwsamplify />,
  'Cognito': <FaAws />,
  'Lambda': <FaAws />,
  'ECS': <FaAws />,
  'Jenkins': <FaJenkins />,
  'Docker': <FaDocker />,
  'GraphQL': <FaDatabase />,
  'CI/CD': <FaGitlab />,
  'GitLab': <FaGitlab />,
  'GitHub': <FaGithub />,
  'Heroku': <GrDeploy />,
  'Netlify': <GrDeploy />,
  'Firebase': <SiFirebase />,
  'GCP': <FaGoogle />,
  'Azure': <FaMicrosoft />,
  'Kubernetes': <GrKubernetes />,
  'Terraform': <SiTerraform />,
  'ArgoCD': <SiArgo />,
  'Java': <FaJava />,
  'Spring Boot': <FaJava />,
  'Python': <FaPython />,
  'Node.js': <FaNodeJs />,
  'Express.js': <FaNodeJs />,
  'Hibernate': <FaJava />,
  'Maven': <FaJava />,
  'Gradle': <FaJava />,
  'JUnit': <FaJava />,
  'Mockito': <FaJava />,
  'Jest': <FaReact />,
  'React': <FaReact />,
  'Angular': <FaAngular />,
  'Vue.js': <FaVuejs />,
  'Next.js': <FaReact />,
  'Gatsby': <FaReact />,
  'Nuxt.js': <FaVuejs />,
  'Redux': <FaReact />,
  'Vuex': <FaVuejs />,
  'Tailwind CSS': <SiCss3 />,
  'Bootstrap': <SiCss3 />,
  'JQuery': <SiJquery />,
  'TypeScript': <SiTypescript />,
  'Express': <SiExpress />,
  'Redis': <SiRedis />,
};

// Mock projects data - replace with actual API call
const mockProjectsData: Project[] = [
  {
    title: "Brain-Cancer Detection System",
    description: "A Brain-Cancer Detection System using a CNN image classification model leverages deep learning techniques to automatically identify and categorize brain tumor types from MRI images. The system preprocesses MRI scans using OpenCV for image enhancement, NumPy for numerical operations, and employs a TensorFlow/Keras-based Convolutional Neural Network to learn distinctive features of cancerous versus non-cancerous tissues.",
    image: { url: "https://i.pinimg.com/736x/82/7a/28/827a285c96dd7a13f3f0257a427773af.jpg" },
    techUsed: "Deep Learning, Mobile.net, VGG16, ResNet50, Flask,  HTML, CSS, JS "
  },
  {
    title: "Audio-Text-Translation",
    description: "An Audio-Text-Translation application that converts spoken language into written text and translates it into multiple target languages. The system utilizes advanced speech recognition models (such as Whisper) to transcribe audio input into text accurately. It then employs powerful language translation models (like GPT or other transformer-based models) to translate the transcribed text into the desired languages, providing users with seamless multilingual communication capabilities.",
    image: { url: "https://private-user-images.githubusercontent.com/154623856/524732029-ad73aa97-374a-4803-b5c4-a500aac97221.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjUzNjI2NzgsIm5iZiI6MTc2NTM2MjM3OCwicGF0aCI6Ii8xNTQ2MjM4NTYvNTI0NzMyMDI5LWFkNzNhYTk3LTM3NGEtNDgwMy1iNWM0LWE1MDBhYWM5NzIyMS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMjEwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTIxMFQxMDI2MThaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05M2Q4NjhjZmM0YzA0NThkYWNmNmFjNmYxM2YwZDFjOTgyMzFlMzM4NzgzNTVjZDg3MjNjOWFjNzhhNzA4ZjM1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.xMPBnIbTxDV7W5rPACS8ZpkWmKk23eL-6A-ZernyyWM" },
    techUsed: "Deep Learning, GenAI, Hugging Face, Flask,  HTML, CSS, JS "
  },
  {
    title: "Diet-Meal Recommendation System",
    description: "A Diet Meal Recommendation System powered by AI utilizes advanced language models (such as GPT and LLaMA) to generate personalized meal plans based on user preferences, health goals, and dietary restrictions. The system features a user-friendly web interface built with React.js, a backend API powered by Node.js, and MongoDB for storing user profiles and meal data.",
    image: { url: "https://i.pinimg.com/736x/08/cb/cf/08cbcf7193b9ed644d58dc57cf4149e6.jpg" },
    techUsed: "LLMs, LangChain, Flask, HuggingFace, HTML, CSS, JS"
  },
  {
    title: "PrepAi- Your personal AI Assistant",
    description: "PrepAi – Your Personal AI Assistant is an intelligent digital companion powered by advanced language models (such as GPT and LLaMA) designed to help users with various everyday tasks. It features a sleek web interface built with React.js, a robust backend using Node.js, and leverages MongoDB to securely manage user data and assistant interactions.",
    image: { url: "https://i.pinimg.com/736x/b0/34/51/b034516bdde2ae3d39c87010ea1d157c.jpg" },
    techUsed: "React, FireBase, TypeScript, Vapi AI, Vercel, Next.Js"
  },
  {
    title: "Bizz-Your Movie Search Platform",
    description: "Bizz – Your Movie Search Platform is a dynamic application designed to help users effortlessly discover and explore movies tailored to their interests. The platform features a modern web interface built with React.js, a backend powered by Node.js, and MongoDB for efficiently managing user profiles and movie metadata",
    image: { url: "https://i.pinimg.com/736x/80/d2/c0/80d2c00f78a37a0c999652f483f618ce.jpg" },
    techUsed: "AppWrite, Tmdb API, Next Js, React"
  },
 
  
];

const getProjects = async (): Promise<Project[]> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  return mockProjectsData;
};

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await getProjects();
        setProjects(data);
      } catch (err) {
        setError('Failed to load projects. Please try again later.');
        console.error('Error fetching projects:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (isLoading) {
    return (
      <div className="projects-container">
        <div className="loading-state">
          <div className="loading-spinner"></div>
          <p>Loading projects...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="projects-container">
        <div className="error-state">
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <div className="projects-container">
        <div className="empty-state">
          <p>No projects available.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="projects-container">
      <div className="projects-header">
        <h2>My Projects</h2>
        <p>A showcase of applications and systems I've built using various technologies</p>
      </div>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={`${project.title}-${index}`}
            className="project-card"
            style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
          >
            <img src={project.image.url} alt={project.title} className="project-image" />
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-used">
                {project.techUsed.split(', ').map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {techIcons[tech] || "🔧"} {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;