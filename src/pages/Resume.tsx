import { motion } from 'framer-motion';
import { Download, Calendar, MapPin } from 'lucide-react';

const Resume = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            My <span className="text-gradient">Resume</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card p-8"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">Guru Prasad</h2>
            <p className="text-xl text-muted-foreground">Full Stack Developer</p>
            <div className="flex justify-center items-center gap-4 mt-2 text-sm">
              <span>mrguruprasad05@gmail.com</span>
              <span>•</span>
              <span>+91 9361927611</span>
            </div>
          </div>

          <div className="space-y-8">
            <section>
              <h3 className="text-2xl font-bold text-gradient mb-4">Education</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold">Higher Secondary Education</h4>
                  <p className="text-muted-foreground">Kalaimagal Higher Secondary School • 10th, 12th</p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <h4 className="font-semibold">B TECH IT</h4>
                  <p className="text-muted-foreground">St. Joseph College of Engineering • 2022 - 2026</p>
                  <p className="text-muted-foreground">Anna University</p>
                  <p className="text-sm mt-2">Information Technology</p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold">Full Stack Development</h4>
                  <p className="text-muted-foreground">NXTWAVE Academy • Student</p>
                  <p className="text-sm mt-2">Comprehensive full-stack development program</p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-gradient mb-4">Experience</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold">Full Stack Developer Intern</h4>
                  <p className="text-muted-foreground">Tech Company • 2024 - Present</p>
                  <p className="text-sm mt-2">Working on modern web applications using React and Node.js</p>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;