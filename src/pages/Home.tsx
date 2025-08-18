import { motion } from 'framer-motion';
import { ChevronDown, Download, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import ParticlesBackground from '../components/ParticlesBackground';
import Scene from '../components/3D/Scene';

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <ParticlesBackground />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Hi, I'm{' '}
              <span className="text-gradient">Alex Morgan</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-muted-foreground mb-8"
            >
              Full Stack Developer & UI/UX Enthusiast
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-foreground/80 mb-12 max-w-xl"
            >
              I craft beautiful, modern web experiences with cutting-edge technologies.
              Passionate about creating seamless user interfaces and robust backend systems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link to="/about" className="hero-button">
                About Me
              </Link>
              <Link to="/contact" className="hero-button-outline flex items-center gap-2">
                <Mail size={20} />
                Contact Me
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex justify-center lg:justify-start gap-8 mt-12"
            >
              {[
                { number: '50+', label: 'Projects' },
                { number: '3+', label: 'Years Experience' },
                { number: '100%', label: 'Client Satisfaction' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-gradient">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* 3D Scene */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="h-96 lg:h-[500px] relative"
          >
            <div className="w-full h-full rounded-2xl glass-card p-4">
              <Scene />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-sm text-muted-foreground">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-2 rounded-full border border-primary/30 hover:border-primary transition-colors cursor-pointer"
          >
            <ChevronDown size={20} className="text-primary" />
          </motion.div>
        </motion.div>
      </section>

      {/* Quick Skills Preview */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What I <span className="text-gradient">Build With</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Modern technologies for cutting-edge solutions
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
          >
            {[
              'React', 'TypeScript', 'Node.js', 'Next.js', 'Tailwind', 'MongoDB'
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card p-6 text-center group cursor-pointer"
              >
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                  ⚡
                </div>
                <div className="text-sm font-medium">{tech}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link to="/skills" className="hero-button-outline">
              View All Skills
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;