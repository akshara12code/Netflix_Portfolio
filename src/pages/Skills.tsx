import React, { useEffect, useState } from 'react';
import './Skills.css';
import { FaReact, FaNodeJs, FaAws, FaDocker, FaGitAlt, FaJava, FaPython } from 'react-icons/fa';
import { SiRubyonrails, SiTypescript, SiPostgresql, SiMysql, SiKubernetes, SiGooglecloud, SiSpringboot, SiPhp, SiNetlify, SiHeroku, SiHtml5, SiCss3, SiRabbitmq, SiImessage, SiJavascript, SiMongodb, SiRedis, SiExpress, SiNextdotjs, SiVuedotjs, SiAngular, SiFirebase, SiTailwindcss, SiBootstrap, SiWebpack, SiJest, SiCypress, SiGraphql, SiApachekafka, SiElasticsearch, SiJenkins, SiTerraform, SiAnsible } from 'react-icons/si';
import { Skill } from '../types';
import { ReactComponent as TensorflowIcon } from '../images/tensorflow.svg';
// filepath: d:\VIT\WEB D\PORTFOLIO\netflix_portfolio\src\pages\Skills.tsx
// import { SiTensorflow, SiScikitlearn, SiPytorch, SiPandas, SiNumpy } from 'react-icons/si';
import { ReactComponent as MlIcon } from '../images/ml.svg';
// filepath: d:\VIT\WEB D\PORTFOLIO\netflix_portfolio\src\pages\Skills.tsx

const iconMap: { [key: string]: JSX.Element } = {
  SiRubyonrails: <SiRubyonrails />,
  FaNodeJs: <FaNodeJs />,
  SiSpringboot: <SiSpringboot />,
  FaJava: <FaJava />,
  SiPhp: <SiPhp />,
  FaPython: <FaPython />,
  TensorflowSVG: <TensorflowIcon />,
  FaReact: <FaReact />,
  SiNextdotjs: <SiNextdotjs />,
  SiVuedotjs: <SiVuedotjs />,
  SiAngular: <SiAngular />,
  SiTypescript: <SiTypescript />,
  SiJavascript: <SiJavascript />,
  SiHtml5: <SiHtml5 />,
  SiCss3: <SiCss3 />,
  SiTailwindcss: <SiTailwindcss />,
  SiBootstrap: <SiBootstrap />,
  FaAws: <FaAws />,
  SiGooglecloud: <SiGooglecloud />,
  FaDocker: <FaDocker />,
  SiKubernetes: <SiKubernetes />,
  SiPostgresql: <SiPostgresql />,
  SiMysql: <SiMysql />,
  SiMongodb: <SiMongodb />,
  SiRedis: <SiRedis />,
  SiHeroku: <SiHeroku />,
  SiNetlify: <SiNetlify />,
  SiFirebase: <SiFirebase />,
  SiRabbitmq: <SiRabbitmq />,
  SiApachekafka: <SiApachekafka />,
  SiElasticsearch: <SiElasticsearch />,
  SiGraphql: <SiGraphql />,
  SiExpress: <SiExpress />,
  SiWebpack: <SiWebpack />,
  SiJest: <SiJest />,
  SiCypress: <SiCypress />,
  FaGitAlt: <FaGitAlt />,
  SiJenkins: <SiJenkins />,
  SiTerraform: <SiTerraform />,
  SiAnsible: <SiAnsible />,
  SiImessage: <SiImessage />,
  MlSVG: <MlIcon style={{ width: '80%', height: '80%' }} />,
};

// Mock skills data - replace with actual API call
const mockSkillsData: Skill[] = [
  // Frontend Development
  {
    name: "React",
    category: "Frontend Development",
    description: "Building dynamic and interactive user interfaces with hooks, context, and modern React patterns.",
    icon: "FaReact"
  },
  {
    name: "Next.js",
    category: "Frontend Development", 
    description: "Full-stack React framework for production with SSR, SSG, and API routes.",
    icon: "SiNextdotjs"
  },
  {
    name: "TypeScript",
    category: "Frontend Development",
    description: "Type-safe JavaScript development for better code quality and developer experience.",
    icon: "SiTypescript"
  },
  

  {
    name: "CSS3",
    category: "Frontend Development",
    description: "Advanced styling with Flexbox, Grid, animations, and responsive design principles.",
    icon: "SiCss3"
  },
  {
    name: "Tailwind CSS",
    category: "Frontend Development",
    description: "Utility-first CSS framework for rapid UI development and consistent design systems.",
    icon: "SiTailwindcss"
  },

  
  
  {
    name: "JavaScript",
    category: "Frontend Development",
    description: "Core scripting language for web development, enabling dynamic and interactive user experiences.",
    icon: "SiJavascript"
},
  // Backend Development
  {
    name: "Node.js",
    category: "Backend Development",
    description: "Server-side JavaScript runtime for building scalable network applications and APIs.",
    icon: "FaNodeJs"
  },
  
  
  
  {
    name: "Python",
    category: "Backend Development",
    description: "Versatile programming language for web development, data science, and automation.",
    icon: "FaPython"
  },


  // Database & Storage
 
  {
    name: "MySQL",
    category: "Database & Storage",
    description: "Popular open-source relational database management system for web applications.",
    icon: "SiMysql"
  },
  

  // Cloud & DevOps
  {
    name: "AWS",
    category: "Cloud & DevOps",
    description: "Amazon Web Services for scalable cloud computing, storage, and deployment solutions.",
    icon: "FaAws"
  },
  {
    name: "Google Cloud",
    category: "Cloud & DevOps",
    description: "Google Cloud Platform for modern cloud infrastructure and machine learning services.",
    icon: "SiGooglecloud"
  },

  //Machine Learning
 {
  name: "TensorFlow",
  category: "Machine Learning",
  description: "Open-source platform for building and deploying machine learning and deep learning models.",
  icon: "MlSVG"
},
{
  name: "scikit-learn",
  category: "Machine Learning",
  description: "Python library for classical machine learning algorithms and data analysis.",
  icon: "MlSVG"
},
{
  name: "PyTorch",
  category: "Machine Learning",
  description: "Deep learning framework for building neural networks and performing advanced research.",
  icon:"MlSVG"
},
{
  name: "Pandas",
  category: "Machine Learning",
  description: "Data manipulation and analysis library for Python, essential for preprocessing and exploration.",
  icon: "MlSVG"
},
{
  name: "NumPy",
  category: "Machine Learning",
  description: "Fundamental package for scientific computing with Python, used for numerical operations.",
  icon: "MlSVG"
}

  
];

const getSkills = async (): Promise<Skill[]> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  return mockSkillsData;
};

const Skills: React.FC = () => {
  const [skillsData, setSkillsData] = useState<Skill[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await getSkills();
        setSkillsData(data);
      } catch (err) {
        setError('Failed to load skills. Please try again later.');
        console.error('Error fetching skills:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSkills();
  }, []);

  if (isLoading) {
    return (
      <div className="skills-container">
        <div className="loading-state">
          <div className="loading-spinner"></div>
          <p>Loading skills...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="skills-container">
        <div className="error-state">
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (skillsData.length === 0) {
    return (
      <div className="skills-container">
        <div className="empty-state">
          <p>No skills data available.</p>
        </div>
      </div>
    );
  }

  const skillsByCategory = skillsData.reduce((acc: any, skill: any) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <div className="skills-container">
      <div className="skills-header">
        <h2>Technical Skills</h2>
        <p>Technologies and tools I work with to build amazing applications</p>
      </div>

      {Object.keys(skillsByCategory).map((category, index) => (
        <div key={index} className="skill-category">
          <h3 className="category-title">{category}</h3>
          <div className="skills-grid">
            {skillsByCategory[category].map((skill: any, idx: number) => (
              <div 
                key={idx} 
                className="skill-card"
                style={{ '--delay': `${idx * 0.1}s` } as React.CSSProperties}
              >
                <div className="icon">{iconMap[skill.icon] || <FaReact />}</div>
                <h3 className="skill-name">
                  {skill.name.split('').map((letter: any, i: number) => (
                    <span key={i} className="letter" style={{ animationDelay: `${i * 0.05}s` }}>
                      {letter}
                    </span>
                  ))}
                </h3>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;