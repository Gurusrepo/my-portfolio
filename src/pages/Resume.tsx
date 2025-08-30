import { motion } from 'framer-motion';
import { Download, Calendar, MapPin } from 'lucide-react';
import certificateStaticWebsite from '../assets/certificate-static-website.jpg';
import certificateSQL from '../assets/certificate-sql.jpg';
import certificateBootstrapFlexbox from '../assets/certificate-bootstrap-flexbox.jpg';

const Resume = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card p-8 max-w-2xl mx-auto"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">Guru Prasad</h2>
          </div>

          <div className="space-y-8">
            <section>
              <h3 className="text-2xl font-bold text-gradient mb-4 text-center">Education</h3>
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
          className="glass-card p-8 mt-8 max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gradient">Earned Certificates</h2>
          </div>

          <section>
            <div className="space-y-12">
              <div className="border-l-4 border-primary pl-6">
                <h4 className="text-xl font-semibold mb-4">Bootstrap and Flexbox</h4>
                <div className="flex justify-center mb-6">
                  <img 
                    src={certificateBootstrapFlexbox} 
                    alt="Bootstrap and Flexbox Certificate" 
                    className="max-w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
                <div>
                  <h5 className="font-semibold text-primary mb-2">Key Skills:</h5>
                  <p className="text-muted-foreground text-sm font-medium">HTML, CSS, Bootstrap</p>
                </div>
              </div>

              <div className="border-l-4 border-secondary pl-6">
                <h4 className="text-xl font-semibold mb-4">Building Static Website</h4>
                <div className="flex justify-center mb-6">
                  <img 
                    src={certificateStaticWebsite} 
                    alt="Building Static Website Certificate" 
                    className="max-w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
                <div>
                  <h5 className="font-semibold text-primary mb-2">Key Skills:</h5>
                  <p className="text-muted-foreground text-sm font-medium">HTML, CSS, BOOTSTRAP</p>
                </div>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h4 className="text-xl font-semibold mb-4">Database Management (SQL)</h4>
                <div className="flex justify-center mb-6">
                  <img 
                    src={certificateSQL} 
                    alt="Database Management SQL Certificate" 
                    className="max-w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
                <div>
                  <h5 className="font-semibold text-primary mb-2">Key Skills:</h5>
                  <p className="text-muted-foreground text-sm font-medium">SQL</p>
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