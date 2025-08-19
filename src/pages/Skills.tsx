import { motion } from 'framer-motion';
import { useState } from 'react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('Frontend');

  const skillCategories = {
    Frontend: [
      { name: 'HTML', level: 82, icon: '🌐' },
      { name: 'CSS', level: 78, icon: '🎨' },
      { name: 'JavaScript', level: 85, icon: '📜' },
      { name: 'React.js', level: 81, icon: '⚛️' },
    ],
    Backend: [
      { name: 'Node.js', level: 83, icon: '🟢' },
      { name: 'Python', level: 79, icon: '🐍' },
    ],
    Tools: [
      { name: 'GitHub', level: 84, icon: '🔧' },
      { name: 'VS Code', level: 77, icon: '💻' },
      { name: 'Bootstrap', level: 76, icon: '🅱️' },
    ],
    Soft: [
      { name: 'Problem Solving', level: 95, icon: '🧩' },
      { name: 'Team Collaboration', level: 90, icon: '🤝' },
      { name: 'Communication', level: 88, icon: '💬' },
      { name: 'Leadership', level: 80, icon: '👑' },
      { name: 'Adaptability', level: 92, icon: '🔄' },
      { name: 'Creativity', level: 85, icon: '✨' },
    ],
  };

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
            My <span className="text-gradient">Skills</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {Object.keys(skillCategories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'hero-button'
                  : 'glass-card hover:border-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories[activeCategory as keyof typeof skillCategories].map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="skill-card group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                  <p className="text-sm text-muted-foreground">{skill.level}% Proficiency</p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-muted rounded-full h-2 mb-4">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                />
              </div>

              {/* Skill Level Text */}
              <div className="text-xs text-muted-foreground text-right">
                {skill.level >= 90 ? 'Expert' : 
                 skill.level >= 80 ? 'Advanced' : 
                 skill.level >= 70 ? 'Intermediate' : 'Beginner'}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">
              Always <span className="text-gradient">Learning</span>
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              Technology evolves rapidly, and I'm committed to staying current with the latest 
              trends and best practices. I regularly take online courses, attend conferences, 
              and contribute to open-source projects to expand my skill set and give back to 
              the developer community.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;