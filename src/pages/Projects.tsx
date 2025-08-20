import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import cricketImage from '../assets/cricket-ecommerce.jpg';
import portfolioImage from '../assets/portfolio-website.jpg';

const Projects = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing projects and skills with smooth animations and interactive elements built with React and Framer Motion.',
      image: portfolioImage,
      technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'Three.js'],
      github: 'https://github.com/Guru887',
      live: 'https://portfolio-demo.com',
      featured: true,
    },
    {
      title: 'Cricket E-commerce Platform',
      description: 'A comprehensive e-commerce platform for cricket equipment and accessories featuring product catalog, shopping cart, and user authentication.',
      image: cricketImage,
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/Guru887',
      live: 'https://cricket-store-demo.com',
      featured: true,
    },
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            My <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my work, from concept to deployment
          </p>
        </motion.div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center max-w-4xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                className="project-card group"
              >
                {/* Project Image */}
                <div className="h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center mb-6">
                  {typeof project.image === 'string' && project.image.startsWith('/') ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  ) : typeof project.image === 'string' && project.image.includes('.jpg') ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  ) : (
                    <div className="text-8xl">{project.image}</div>
                  )}
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-foreground/80 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 glass-card hover:border-primary transition-colors"
                    >
                      <Github size={18} />
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hero-button-outline"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>


        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 text-center"
        >
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">
              Interested in <span className="text-gradient">Working Together?</span>
            </h2>
            <p className="text-foreground/80 mb-6">
              I'm always open to discussing new projects and opportunities.
            </p>
            <a href="/contact" className="hero-button">
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
