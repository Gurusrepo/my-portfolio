import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Code, FolderOpen, FileText, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
const Layout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navigation = [{
    name: 'Home',
    href: '/',
    icon: Home
  }, {
    name: 'About',
    href: '/about',
    icon: User
  }, {
    name: 'Skills',
    href: '/skills',
    icon: Code
  }, {
    name: 'Projects',
    href: '/projects',
    icon: FolderOpen
  }, {
    name: 'Resume',
    href: '/resume',
    icon: FileText
  }, {
    name: 'Contact',
    href: '/contact',
    icon: Mail
  }];
  return <div className="min-h-screen bg-hero-gradient">
      {/* Navigation */}
      <motion.nav initial={{
      y: -100
    }} animate={{
      y: 0
    }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-card shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-gradient">GP</Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigation.map(item => <Link key={item.name} to={item.href} className={`nav-link ${location.pathname === item.href ? 'text-primary' : ''}`}>
                  {item.name}
                </Link>)}
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-lg text-foreground hover:text-primary transition-colors">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && <motion.div initial={{
          opacity: 0,
          height: 0
        }} animate={{
          opacity: 1,
          height: 'auto'
        }} exit={{
          opacity: 0,
          height: 0
        }} className="md:hidden glass-card border-t border-border">
              <div className="px-4 py-4 space-y-2">
                {navigation.map(item => {
              const Icon = item.icon;
              return <Link key={item.name} to={item.href} onClick={() => setIsMenuOpen(false)} className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${location.pathname === item.href ? 'text-primary bg-primary/10' : 'text-foreground hover:text-primary hover:bg-primary/5'}`}>
                      <Icon size={20} />
                      <span>{item.name}</span>
                    </Link>;
            })}
              </div>
            </motion.div>}
        </AnimatePresence>
      </motion.nav>

      {/* Main Content */}
      <main className="pt-16">
        {children}
      </main>

      {/* Social Links Footer */}
      <motion.footer initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1
    }} className="fixed bottom-6 left-6 z-40 hidden lg:flex flex-col space-y-4">
        {[{
        name: 'GitHub',
        url: 'https://github.com/Gurusrepo',
        icon: '🔗'
      }, {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/guru-prasad-mohan',
        icon: '💼'
      }
    ].map(social => <motion.a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" whileHover={{
        scale: 1.2,
        y: -2
      }} whileTap={{
        scale: 0.9
      }} className="w-12 h-12 glass-card flex items-center justify-center text-2xl hover:text-primary transition-colors">
            {social.icon}
          </motion.a>)}
      </motion.footer>
    </div>;
};
export default Layout;