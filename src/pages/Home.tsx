import { motion } from 'framer-motion';
import { ChevronDown, Download, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import ParticlesBackground from '../components/ParticlesBackground';
import Scene from '../components/3D/Scene';
const Home = () => {
  return <div className="relative min-h-screen overflow-hidden">
      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <ParticlesBackground />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8
        }} className="text-center lg:text-left">
            <motion.h1 initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.2,
            duration: 0.8
          }} className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm{' '}
              <span className="text-gradient">Guru Prasad</span>
            </motion.h1>

            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.4,
            duration: 0.8
          }} className="text-xl md:text-2xl text-muted-foreground mb-8">Full Stack Developer </motion.p>

            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.6,
            duration: 0.8
          }} className="text-lg text-foreground/80 mb-12 max-w-xl mx-[20px]">I’m a passionate Full-Stack Developer with experience in HTML, CSS, JavaScript, React.js, Node.js, Python, and SQL.
I enjoy solving problems, building dynamic applications, and creating digital solutions that make an impact.</motion.p>

            {/* CTA Buttons */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.8,
            duration: 0.8
          }} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/about" className="hero-button">
                About Me
              </Link>
              <Link to="/contact" className="hero-button-outline flex items-center gap-2">
                <Mail size={20} />
                Contact Me
              </Link>
            </motion.div>

          </motion.div>

          {/* 3D Scene */}
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          delay: 0.4,
          duration: 0.8
        }} className="h-96 lg:h-[500px] relative">
            <div className="w-full h-full rounded-2xl glass-card p-4">
              <Scene />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        
      </section>

      {/* Quick Skills Preview */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What I <span className="text-gradient">Build With</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Modern technologies for cutting-edge solutions
            </p>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="flex justify-center items-center gap-8 flex-wrap">
            {['React', 'Node.js', 'Tailwind CSS'].map((tech, index) => <motion.div key={tech} initial={{
            opacity: 0,
            scale: 0.8
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} whileHover={{
            scale: 1.05,
            y: -5
          }} className="glass-card p-6 text-center group cursor-pointer">
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                  ⚡
                </div>
                <div className="text-sm font-medium">{tech}</div>
              </motion.div>)}
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} className="text-center mt-12">
            <Link to="/skills" className="hero-button-outline">
              View All Skills
            </Link>
          </motion.div>
        </div>
      </section>
    </div>;
};
export default Home;