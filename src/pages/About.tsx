import { motion } from 'framer-motion';
import { Calendar, MapPin, Heart, Coffee } from 'lucide-react';
import profilePhoto from '../assets/profile-photo.jpg';
const About = () => {
  const timeline = [{
    year: '2020',
    title: 'Started Web Development Journey',
    description: 'Began learning HTML, CSS, and JavaScript. Built my first static website.'
  }, {
    year: '2021',
    title: 'Mastered Frontend Frameworks',
    description: 'Dove deep into React.js and modern frontend development practices.'
  }, {
    year: '2022',
    title: 'Full Stack Development',
    description: 'Expanded to backend technologies including Node.js, databases, and APIs.'
  }, {
    year: '2023',
    title: 'Professional Experience',
    description: 'Started working on real-world projects and contributing to open source.'
  }];
  return <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div initial={{
        opacity: 0,
        y: 50
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate developer with a love for creating beautiful, functional web experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Profile Section */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="space-y-8">
            {/* Profile Image */}
            <div className="relative">
              <div className="w-64 h-64 mx-auto lg:mx-0 rounded-full glass-card p-4 animate-glow">
                <img 
                  src={profilePhoto} 
                  alt="Guru Prasad - Full Stack Developer"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>

            {/* Bio */}
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold mb-4 text-gradient">Hello, I'm Guru!</h2>
              <p className="text-foreground/80 leading-relaxed mb-6 mx-[10px] font-medium text-lg">I’m a passionate Full-Stack Developer with a strong foundation in both frontend design and backend architecture. From crafting intuitive user interfaces to building robust server-side logic, I enjoy every step of the development process. </p>
              

              {/* Quick Facts */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  
                  <span className="text-sm"></span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-primary mx-0 my-[10px]" />
                  <span className="text-sm">India , Chennai</span>
                </div>
                
                
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          
        </div>

        {/* Values Section */}
        <motion.div initial={{
        opacity: 0,
        y: 50
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.8
      }} className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            What I <span className="text-gradient">Believe In</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
            icon: '🎨',
            title: 'Design Matters',
            description: 'Beautiful interfaces create better user experiences.'
          }, {
            icon: '⚡',
            title: 'Performance First',
            description: 'Fast, optimized applications that users love to use.'
          }, {
            icon: '🚀',
            title: 'Innovation',
            description: 'Always exploring new technologies and best practices.'
          }].map((value, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 1 + index * 0.2
          }} className="glass-card p-8 text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-foreground/80">{value.description}</p>
              </motion.div>)}
          </div>
        </motion.div>
      </div>
    </div>;
};
export default About;