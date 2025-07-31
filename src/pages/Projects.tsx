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
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with user authentication, product catalog, shopping cart, and payment integration. Features include real-time inventory management, order tracking, and admin dashboard.",
    image: { url: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop" },
    techUsed: "React, Node.js, Express.js, MongoDB, Redis, AWS, Docker"
  },
  {
    title: "Task Management System",
    description: "A collaborative task management application with real-time updates, team collaboration features, and project tracking. Includes drag-and-drop functionality, time tracking, and reporting.",
    image: { url: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop" },
    techUsed: "Next.js, TypeScript, PostgreSQL, GraphQL, Tailwind CSS, Vercel"
  },
  {
    title: "Social Media Dashboard",
    description: "A comprehensive social media analytics dashboard that aggregates data from multiple platforms. Features include real-time metrics, custom reports, and automated posting capabilities.",
    image: { url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop" },
    techUsed: "React, Python, FastAPI, PostgreSQL, Redis, AWS Lambda, Material UI"
  },
  {
    title: "Learning Management System",
    description: "An online learning platform with course creation tools, student progress tracking, and interactive assessments. Includes video streaming, discussion forums, and certification generation.",
    image: { url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop" },
    techUsed: "Vue.js, Spring Boot, Java, MySQL, AWS S3, Docker, Kubernetes"
  },
  {
    title: "Real Estate Management",
    description: "A property management system for real estate agents with listing management, client portal, and virtual tour integration. Features include property search, scheduling, and document management.",
    image: { url: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=250&fit=crop" },
    techUsed: "Angular, .NET Core, C#, SQL Server, Azure, Bootstrap"
  },
  {
    title: "Healthcare Portal",
    description: "A patient management system with appointment scheduling, medical records, and telemedicine capabilities. Includes prescription management, billing integration, and HIPAA compliance.",
    image: { url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop" },
    techUsed: "React, Node.js, MongoDB, AWS Cognito, Lambda, Material UI"
  },
  {
    title: "Financial Analytics Tool",
    description: "A comprehensive financial analytics platform with portfolio tracking, risk assessment, and automated reporting. Features include real-time market data, custom alerts, and investment recommendations.",
    image: { url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop" },
    techUsed: "Python, Django, PostgreSQL, Redis, Docker, AWS ECS, Bootstrap"
  },
  {
    title: "IoT Device Manager",
    description: "An IoT device management platform with real-time monitoring, remote control capabilities, and data visualization. Includes device provisioning, firmware updates, and alert systems.",
    image: { url: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop" },
    techUsed: "React, Node.js, InfluxDB, MQTT, Docker, Kubernetes, Grafana"
  },
  {
    title: "Content Management System",
    description: "A headless CMS with drag-and-drop page builder, multi-language support, and SEO optimization. Features include version control, workflow management, and API-first architecture.",
    image: { url: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=250&fit=crop" },
    techUsed: "Next.js, Strapi, PostgreSQL, AWS S3, Cloudfront, Tailwind CSS"
  },
  {
    title: "Event Management Platform",
    description: "A comprehensive event management solution with ticketing, attendee management, and live streaming capabilities. Includes payment processing, networking features, and analytics.",
    image: { url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop" },
    techUsed: "Vue.js, Ruby On Rails, PostgreSQL, Redis, Stripe API, AWS"
  },
  {
    title: "Inventory Management System",
    description: "A warehouse inventory management system with barcode scanning, automated reordering, and supplier integration. Features include real-time tracking, reporting, and mobile app support.",
    image: { url: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=250&fit=crop" },
    techUsed: "Angular, Spring Boot, MySQL, Apache Kafka, Docker, Jenkins"
  },
  {
    title: "AI-Powered Chatbot",
    description: "An intelligent customer service chatbot with natural language processing, sentiment analysis, and integration with CRM systems. Features include multi-language support and learning capabilities.",
    image: { url: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=250&fit=crop" },
    techUsed: "Python, TensorFlow, Flask, React, MongoDB, AWS Lambda, Docker"
  }
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