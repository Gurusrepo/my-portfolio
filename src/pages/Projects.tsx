import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with modern UI, payment integration, and admin dashboard.',
      image: '🛒',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com',
      live: 'https://demo.com',
      featured: true,
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates and team features.',
      image: '📋',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'WebSocket'],
      github: 'https://github.com',
      live: 'https://demo.com',
      featured: true,
    },
    {
      title: 'Weather Dashboard',
      description: 'Beautiful weather app with location-based forecasts and interactive maps.',
      image: '🌤️',
      technologies: ['React', 'OpenWeather API', 'Chart.js'],
      github: 'https://github.com',
      live: 'https://demo.com',
      featured: false,
    },
    {
      title: 'Social Media Analytics',
      description: 'Analytics dashboard for social media metrics with data visualization.',
      image: '📊',
      technologies: ['Vue.js', 'D3.js', 'Express', 'PostgreSQL'],
      github: 'https://github.com',
      live: 'https://demo.com',
      featured: false,
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio with 3D animations and modern design principles.',
      image: '🎨',
      technologies: ['React', 'Three.js', 'Framer Motion'],
      github: 'https://github.com',
      live: 'https://demo.com',
      featured: false,
    },
    {
      title: 'AI Chat Bot',
      description: 'Intelligent chatbot with natural language processing capabilities.',
      image: '🤖',
      technologies: ['Python', 'OpenAI', 'React', 'FastAPI'],
      github: 'https://github.com',
      live: 'https://demo.com',
      featured: false,
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

        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                className="project-card group"
              >
                {/* Project Image/Icon */}
                <div className="h-64 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-8xl mb-6">
                  {project.image}
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

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">
            Other <span className="text-gradient">Projects</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="project-card group"
              >
                {/* Project Icon */}
                <div className="h-32 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-5xl mb-4">
                  {project.image}
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-foreground/80 text-sm mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary/10 text-primary rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 glass-card hover:border-primary transition-colors text-sm"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-primary/10 text-primary hover:bg-primary hover:text-background transition-colors text-sm rounded"
                    >
                      <ExternalLink size={16} />
                      Live
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
