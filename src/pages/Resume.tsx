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
          <button className="hero-button flex items-center gap-2 mx-auto">
            <Download size={20} />
            Download PDF
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card p-8"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">Alex Morgan</h2>
            <p className="text-xl text-muted-foreground">Full Stack Developer</p>
            <div className="flex justify-center items-center gap-4 mt-2 text-sm">
              <span>alex@example.com</span>
              <span>•</span>
              <span>+1 (555) 123-4567</span>
            </div>
          </div>

          <div className="space-y-8">
            <section>
              <h3 className="text-2xl font-bold text-gradient mb-4">Experience</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold">Senior Frontend Developer</h4>
                  <p className="text-muted-foreground">TechCorp Inc. • 2022 - Present</p>
                  <p className="text-sm mt-2">Led development of user-facing applications serving 100k+ users</p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-gradient mb-4">Education</h3>
              <div className="border-l-4 border-secondary pl-4">
                <h4 className="font-semibold">B.S. Computer Science</h4>
                <p className="text-muted-foreground">University of Technology • 2020</p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;