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
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass-card p-8 mt-8"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gradient">Guru Prasad</h2>
          </div>

          <section>
            <h3 className="text-2xl font-bold text-gradient mb-6">Certificates</h3>
            <div className="space-y-12">
              <div className="border-l-4 border-primary pl-6">
                <h4 className="text-xl font-semibold mb-4">Building Static Website</h4>
                <div className="flex justify-center mb-6">
                  <img 
                    src="/src/assets/certificate-static-website.jpg" 
                    alt="Building Static Website Certificate" 
                    className="max-w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-primary mb-2">Outcome:</h5>
                    <p className="text-muted-foreground text-sm">
                      Build a static website that appears beautifully on mobile screens. Develop a Tourism website to browse through the content, videos, and images of popular destinations, websites to host conferences and events, etc. Publish your website and share it with your friends, family and beyond. Learn to use tools and technologies such as HTML, CSS and Bootstrap.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-primary mb-2">Key Learnings:</h5>
                    <p className="text-muted-foreground text-sm">
                      Projects are a perfect place for you to become the creator of Technology that we use every day. Create and publish your own websites and showcase your skills to the world. Master the concepts of Full-stack development right from the basics and gain practical skills that are highly valued by companies. These skills will be very useful as you go on to innovate using 4.0 Tech and build real-world applications.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-primary mb-2">Key Skills:</h5>
                    <p className="text-muted-foreground text-sm font-medium">HTML, CSS, BOOTSTRAP</p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-secondary pl-6">
                <h4 className="text-xl font-semibold mb-4">Database Management (SQL)</h4>
                <div className="flex justify-center mb-6">
                  <img 
                    src="/src/assets/certificate-sql.jpg" 
                    alt="Database Management SQL Certificate" 
                    className="max-w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-primary mb-2">Outcome:</h5>
                    <p className="text-muted-foreground text-sm">
                      Learned about the incredibly prevalent databases. Through this course, I developed strong fundamentals and became proficient in concepts related to Databases and DBMS. Most importantly, I am able to perform powerful queries on databases using SQL.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-primary mb-2">Key Learnings:</h5>
                    <p className="text-muted-foreground text-sm">
                      The objective of the course is to present an introduction to database management systems, with an emphasis on how to organize, maintain and retrieve - efficiently, and effectively - information from a DBMS.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-primary mb-2">Key Skills:</h5>
                    <p className="text-muted-foreground text-sm font-medium">SQL</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;