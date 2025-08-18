import { motion } from 'framer-motion';
import { Calendar, MapPin, Heart, Coffee } from 'lucide-react';

const About = () => {
  const timeline = [
    {
      year: '2020',
      title: 'Started Web Development Journey',
      description: 'Began learning HTML, CSS, and JavaScript. Built my first static website.',
    },
    {
      year: '2021',
      title: 'Mastered Frontend Frameworks',
      description: 'Dove deep into React.js and modern frontend development practices.',
    },
    {
      year: '2022',
      title: 'Full Stack Development',
      description: 'Expanded to backend technologies including Node.js, databases, and APIs.',
    },
    {
      year: '2023',
      title: 'Professional Experience',
      description: 'Started working on real-world projects and contributing to open source.',
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate developer with a love for creating beautiful, functional web experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Profile Image */}
            <div className="relative">
              <div className="w-64 h-64 mx-auto lg:mx-0 rounded-full glass-card p-4 animate-glow">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-6xl">
                  👨‍💻
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold mb-4 text-gradient">Hello, I'm Alex!</h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                I'm a passionate Full Stack Developer with 3+ years of experience creating 
                modern web applications. I love turning complex problems into simple, 
                beautiful, and intuitive solutions.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-6">
                When I'm not coding, you'll find me exploring new technologies, contributing 
                to open source projects, or sharing knowledge with the developer community.
              </p>

              {/* Quick Facts */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Calendar className="text-primary" size={20} />
                  <span className="text-sm">3+ Years Experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-primary" size={20} />
                  <span className="text-sm">San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="text-primary" size={20} />
                  <span className="text-sm">Open Source</span>
                </div>
                <div className="flex items-center gap-3">
                  <Coffee className="text-primary" size={20} />
                  <span className="text-sm">Coffee Enthusiast</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center lg:text-left">
              My <span className="text-gradient">Journey</span>
            </h2>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary"></div>
              
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                  className="relative flex items-start gap-6 mb-12"
                >
                  {/* Timeline Dot */}
                  <div className="relative z-10 w-16 h-16 rounded-full glass-card flex items-center justify-center font-bold text-primary">
                    {item.year}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 glass-card p-6">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-foreground/80">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            What I <span className="text-gradient">Believe In</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎨',
                title: 'Design Matters',
                description: 'Beautiful interfaces create better user experiences.',
              },
              {
                icon: '⚡',
                title: 'Performance First',
                description: 'Fast, optimized applications that users love to use.',
              },
              {
                icon: '🚀',
                title: 'Innovation',
                description: 'Always exploring new technologies and best practices.',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                className="glass-card p-8 text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-foreground/80">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;