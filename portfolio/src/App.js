import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import Tilt from 'react-parallax-tilt';
import emailjs from '@emailjs/browser';
import { FiMail, FiPhone, FiHome } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineUser, HiOutlineLightBulb, HiOutlineCode, HiOutlineBriefcase, HiOutlineAcademicCap, HiOutlineStar, HiOutlineDocumentText, HiOutlineMail, HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';
import { Tooltip } from 'react-tooltip';

// Add these at the top of the file after imports
const sections = [
  'Hero', 'About', 'Skills', 'Projects', 'Internships', 'Certifications', 'Achievements', 'Education', 'Contact'
];

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const cardVariants = {
  rest: { scale: 1, boxShadow: '0 4px 24px 0 rgba(0,0,0,0.10)' },
  hover: { scale: 1.04, boxShadow: '0 8px 32px 0 rgba(79,109,255,0.25)' },
};

// Animated Background Components
function FloatingParticles() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-cyan/20 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
}

function AnimatedShapes() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Floating Triangles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`triangle-${i}`}
          className="absolute w-4 h-4 border-l-2 border-b-2 border-cyan/30 transform rotate-45"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: Math.random() * 8 + 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Floating Circles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`circle-${i}`}
          className="absolute w-3 h-3 bg-cyan/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: Math.random() * 6 + 3,
            repeat: Infinity,
            ease: "easeInOut",
            type: "tween"
          }}
        />
      ))}
      
      {/* Floating Squares */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`square-${i}`}
          className="absolute w-2 h-2 bg-blueberry/30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: Math.random() * 10 + 5,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
}

function GradientOrbs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Large Gradient Orb 1 */}
      <motion.div
        className="absolute w-[400px] h-[400px] bg-gradient-to-r from-cyan/20 to-blueberry/20 rounded-full blur-3xl"
        style={{
          left: '10%',
          top: '20%',
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Large Gradient Orb 2 */}
      <motion.div
        className="absolute w-[300px] h-[300px] bg-gradient-to-r from-blueberry/20 to-cyan/20 rounded-full blur-3xl"
        style={{
          right: '15%',
          bottom: '30%',
        }}
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Medium Gradient Orb */}
      <motion.div
        className="absolute w-[200px] h-[200px] bg-gradient-to-r from-berry-pink/20 to-cyan/20 rounded-full blur-2xl"
        style={{
          left: '60%',
          top: '60%',
        }}
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}

function AnimatedGrid() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 opacity-10">
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(rgba(67, 231, 254, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(67, 231, 254, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }}>
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
    </div>
  );
}

function WaveEffect() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <svg className="absolute bottom-0 w-full h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <motion.path
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
          fill="rgba(67, 231, 254, 0.1)"
          animate={{
            d: [
              "M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z",
              "M0,0V30.29c47.79,15.2,103.59,22.17,158,18,70.36-3.37,136.33-23.31,206.8-27.5C438.64,22.43,512.34,33.67,583,42.05c69.27,12,138.3,14.88,209.4,8.08,36.15-4,69.85-12.84,104.45-19.34C989.49,15,1113-9.29,1200,32.47V0Z",
              "M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </svg>
    </div>
  );
}

function PulsingElements() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`pulse-${i}`}
          className="absolute w-1 h-1 bg-cyan/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 3, 1],
            opacity: [0.4, 0, 0.4],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "easeInOut",
            type: "tween"
          }}
        />
      ))}
    </div>
  );
}

function MouseFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed w-4 h-4 bg-cyan/30 rounded-full pointer-events-none z-50 mix-blend-difference"
      animate={{
        x: mousePosition.x - 8,
        y: mousePosition.y - 8,
        scale: [1, 1.5, 1],
      }}
      transition={{
        duration: 1.2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        type: "tween"
      }}
    />
  );
}

function DarkModeToggle() {
  const [dark, setDark] = useState(false);
  React.useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);
  return (
    <button
      onClick={() => setDark(!dark)}
      className="ml-4 px-3 py-1 rounded bg-blueberry dark:bg-blueberry-dark text-white shadow hover:bg-blue-700 dark:hover:bg-blueberry transition"
    >
      {dark ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}

function useActiveSection(sections) {
  const [active, setActive] = useState(sections[0]);
  useEffect(() => {
    const handleScroll = () => {
      let found = sections[0];
      for (const section of sections) {
        const el = document.getElementById(section.toLowerCase());
        if (el && window.scrollY + 100 >= el.offsetTop) {
          found = section;
        }
      }
      setActive(found);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);
  return active;
}

function Footer() {
  return (
    <footer className="w-full py-6 mt-16 bg-gradient-to-r from-blueberry via-purple to-pink text-white text-center shadow-2xl animate-gradient-x">
      <div className="flex flex-col items-center gap-2">
        <span className="font-bold text-lg tracking-wide drop-shadow">Solai Prakash V &copy; {new Date().getFullYear()}</span>
        <span className="text-sm opacity-80">AI & Web Developer Portfolio</span>
        <div className="flex gap-6 mt-2 justify-center">
          <a href="mailto:solaiprakashv@gmail.com" className="flex items-center gap-1 hover:text-cyan transition text-2xl animate-footer-icon" title="Email"><FiMail />📧</a>
          <a href="tel:+916369950829" className="flex items-center gap-1 hover:text-cyan transition text-2xl animate-footer-icon" title="Phone"><FiPhone />📱</a>
          <a href="https://github.com/solaiprakashv" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-cyan transition text-2xl animate-footer-icon" title="GitHub"><FaGithub />🐙</a>
          <a href="https://www.linkedin.com/in/solai-prakash-a92a0425b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-cyan transition text-2xl animate-footer-icon" title="LinkedIn"><FaLinkedin />💼</a>
        </div>
      </div>
    </footer>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    emailjs.send(
      'service_rpi2t5n',
      'template_70ns0sp',
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
        to_email: 'solaiprakashv@gmail.com',
      },
      'Tz2BXp2XJ-88AqGLU'
    ).then(() => {
      setStatus('Message sent! ✅ You will receive a copy in your email.');
      setForm({ name: '', email: '', message: '' });
    }, () => setStatus('Failed to send. Try again.'));
  };
  return (
    <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} glareEnable={true} glareMaxOpacity={0.10} scale={1.01} className="w-full">
      <form onSubmit={handleSubmit} className="rounded-2xl bg-[#232526]/80 backdrop-blur-lg shadow-2xl p-8 md:p-12 border border-[#434343]/60 flex flex-col gap-4 max-w-xl mx-auto mt-8">
        <h3 className="text-2xl font-bold text-cyan mb-2">Contact Me</h3>
        <input name="name" value={form.name} onChange={handleChange} required placeholder="Your Name" className="rounded-lg px-4 py-2 bg-[#232526]/40 text-white border border-blueberry focus:ring-2 focus:ring-cyan outline-none" />
        <input name="email" value={form.email} onChange={handleChange} required type="email" placeholder="Your Email" className="rounded-lg px-4 py-2 bg-[#232526]/40 text-white border border-blueberry focus:ring-2 focus:ring-cyan outline-none" />
        <textarea name="message" value={form.message} onChange={handleChange} required placeholder="Your Message" rows={4} className="rounded-lg px-4 py-2 bg-[#232526]/40 text-white border border-blueberry focus:ring-2 focus:ring-cyan outline-none" />
        <button type="submit" className="mt-2 px-6 py-2 bg-blueberry text-white font-bold rounded-lg shadow hover:bg-cyan transition">Send</button>
        {status && <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-sm text-cyan mt-2 bg-[#1a1a1a]/80 px-4 py-2 rounded-lg shadow-lg border border-cyan/40">{status}</motion.div>}
      </form>
    </Tilt>
  );
}

function TopNavbar() {
  const active = useActiveSection(sections);
  return (
    <motion.nav className="fixed top-0 left-0 right-0 z-50 bg-[#232526]/80 backdrop-blur-lg shadow-xl border-b border-[#434343]/60">
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div 
          className="text-2xl font-bold text-cyan cursor-pointer"
          whileHover={{ scale: 1.1, rotate: 360 }}
          transition={{ duration: 0.3 }}
        >
          SP
        </motion.div>
        <div className="flex items-center gap-6">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section.toLowerCase()}`}
              className={`text-sm font-medium transition-colors ${
                active === section ? 'text-cyan' : 'text-protext/70 hover:text-cyan'
              }`}
            >
              {section}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}

function App() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const contactRef = useRef();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    emailjs.send(
      'service_rpi2t5n',
      'template_70ns0sp',
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
        to_email: 'solaiprakashv@gmail.com',
      },
      'Tz2BXp2XJ-88AqGLU'
    ).then(() => {
      setStatus('Message sent! ✅ You will receive a copy in your email.');
      setForm({ name: '', email: '', message: '' });
    }, () => setStatus('Failed to send. Try again.'));
  };
  const handleContactScroll = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <motion.div
      className="min-h-screen font-sans text-protext transition-colors duration-300 bg-pro-gradient flex flex-col relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Animated Background Elements */}
      <FloatingParticles />
      <AnimatedShapes />
      <GradientOrbs />
      <AnimatedGrid />
      <WaveEffect />
      <PulsingElements />
      <MouseFollower />
      
      <TopNavbar />
      <div className="pt-20 pb-8 flex-1 flex flex-col gap-24 relative z-10">
        {/* Hero Section */}
        <motion.section
          id="hero"
          className="min-h-[80vh] flex flex-col items-center justify-center text-center relative scroll-mt-24"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="absolute -z-10 top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-berry-pink-gradient opacity-30 blur-3xl rounded-full animate-pulse-slow"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
          />
          <Tilt tiltMaxAngleX={20} tiltMaxAngleY={20} glareEnable={true} glareMaxOpacity={0.25} scale={1.05} className="mb-8">
            <motion.img
              src="/profile.jpg"
              alt="Profile"
              className="w-[220px] h-[220px] object-cover rounded-2xl shadow-2xl border-4 border-white/40 bg-white/10 backdrop-blur-lg"
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            />
          </Tilt>
          <motion.h1
            className="font-heading text-5xl md:text-6xl font-extrabold tracking-tight mb-4 text-protext"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Solai Prakash V
          </motion.h1>
          <motion.p className="text-2xl md:text-3xl font-heading font-semibold mb-2 text-cyan tracking-tight">AI & Web Developer</motion.p>
          <motion.p className="max-w-2xl mb-8 text-xl font-medium text-protext/90">
            "An enthusiastic developer proficient in web and real-time application development, capable of building responsive UIs and practical AI solutions."
          </motion.p>
          <div className="flex gap-6 justify-center">
            <a href="/SolaiPrakash_Resume.pdf" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.08, boxShadow: '0 0 32px #43E7FE' }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3 bg-white text-blueberry font-bold rounded-xl shadow-lg hover:bg-cyan transition text-lg"
              >
                View Resume
              </motion.button>
            </a>
            <motion.button
              onClick={handleContactScroll}
              whileHover={{ scale: 1.08, boxShadow: '0 0 32px #FF6FD8' }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 bg-blueberry-dark text-white rounded-xl shadow-lg hover:bg-blueberry transition text-lg"
            >
              Contact Me
            </motion.button>
          </div>
        </motion.section>
        {/* About Section */}
        <motion.section id="about" className="max-w-4xl mx-auto px-4 scroll-mt-24" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.div className="rounded-2xl bg-[#232526]/80 backdrop-blur-lg shadow-xl p-8 md:p-12 border border-[#434343]/60 hover:shadow-2xl transition-all">
            <h2 className="font-heading text-3xl font-bold mb-4 text-cyan tracking-tight">About</h2>
            <p className="text-xl font-medium text-protext/90">Passionate about building efficient, real-time web apps and solving real-world problems with AI. Skilled in frontend development, Java/Python, and cloud tools.</p>
          </motion.div>
        </motion.section>
        {/* Skills Section */}
        <motion.section id="skills" className="max-w-4xl mx-auto px-4 scroll-mt-24" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="font-heading text-3xl font-bold mb-4 text-cyan tracking-tight">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl bg-[#232526]/80 shadow-xl p-8 border border-[#434343]/60 text-protext flex flex-col">
              <div className="flex items-center mb-4">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="w-8 h-8 mr-3" />
                <span className="font-bold text-xl">Languages</span>
              </div>
              <span>Java, Python, SQL, C</span>
            </div>
            <div className="rounded-2xl bg-[#232526]/80 shadow-xl p-8 border border-[#434343]/60 text-protext flex flex-col">
              <div className="flex items-center mb-4">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="Web" className="w-8 h-8 mr-3" />
                <span className="font-bold text-xl">Web</span>
              </div>
              <span>Frontend Technologies, Flask</span>
            </div>
            <div className="rounded-2xl bg-[#232526]/80 shadow-xl p-8 border border-[#434343]/60 text-protext flex flex-col">
              <div className="flex items-center mb-4">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Design" className="w-8 h-8 mr-3" />
                <span className="font-bold text-xl">Design Tools</span>
              </div>
              <span>Canva, Figma</span>
            </div>
            <div className="rounded-2xl bg-[#232526]/80 shadow-xl p-8 border border-[#434343]/60 text-protext flex flex-col">
              <div className="flex items-center mb-4">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="Platforms" className="w-8 h-8 mr-3" />
                <span className="font-bold text-xl">Platforms</span>
              </div>
              <span>GitHub, Google Cloud, Oracle</span>
            </div>
            <div className="rounded-2xl bg-[#232526]/80 shadow-xl p-8 border border-[#434343]/60 text-protext flex flex-col">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">🤝</span>
                <span className="font-bold text-xl">Soft Skills</span>
              </div>
              <span>Leadership, Coordination</span>
            </div>
          </div>
        </motion.section>
        {/* Projects Section */}
        <motion.section id="projects" className="max-w-4xl mx-auto px-4 scroll-mt-24" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="font-heading text-3xl font-bold mb-4 text-cyan tracking-tight">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a href="https://github.com/solaiprakashv/AI-Traffic-Managment" target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-[#232526]/80 shadow-xl p-8 border border-[#434343]/60 text-protext flex flex-col transition-transform hover:scale-105 hover:border-cyan focus:outline-none focus:ring-2 focus:ring-cyan">
              <div className="flex items-center mb-4">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-8 h-8 mr-3" />
                <span className="font-bold text-xl">Traffic Monitoring & Analysis</span>
              </div>
              <span>Python + OpenCV vehicle counter with CSV logs</span>
            </a>
            <a href="https://github.com/solaiprakashv/AI_Text_Summarizer" target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-[#232526]/80 shadow-xl p-8 border border-[#434343]/60 text-protext flex flex-col transition-transform hover:scale-105 hover:border-cyan focus:outline-none focus:ring-2 focus:ring-cyan">
              <div className="flex items-center mb-4">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" alt="Flask" className="w-8 h-8 mr-3" />
                <span className="font-bold text-xl">AI Text Summarizer</span>
              </div>
              <span>Flask + NLP-based summarizer with clean UI</span>
            </a>
            <a href="https://github.com/solaiprakashv/Full-Stack-Development" target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-[#232526]/80 shadow-xl p-8 border border-[#434343]/60 text-protext flex flex-col transition-transform hover:scale-105 hover:border-cyan focus:outline-none focus:ring-2 focus:ring-cyan">
              <div className="flex items-center mb-4">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-8 h-8 mr-3" />
                <span className="font-bold text-xl">Student Management System</span>
              </div>
              <span>Full-stack CRUD for managing student records</span>
            </a>
          </div>
        </motion.section>
        {/* Internships Section */}
        <motion.section id="internships" className="max-w-4xl mx-auto px-4 scroll-mt-24" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true} glareMaxOpacity={0.12} scale={1.02} className="w-full">
            <motion.div className="rounded-2xl bg-[#232526]/80 shadow-xl p-8 md:p-12 border border-[#434343]/60 text-protext font-semibold text-lg md:text-xl hover:scale-105 transition-transform" variants={cardVariants} initial="rest" whileHover="hover" animate="rest">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">💼</span>
                <h2 className="text-3xl font-bold text-cyan drop-shadow">Internships</h2>
              </div>
              <ul className="list-disc pl-6 space-y-2">
                <li><b>Infosys Web Walk</b> – Web Development (Dec 2023)</li>
                <li><b>Xplocode</b> – Java (May 2024)</li>
              </ul>
            </motion.div>
          </Tilt>
        </motion.section>
        {/* Certifications Section */}
        <motion.section id="certifications" className="max-w-4xl mx-auto px-4 scroll-mt-24" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true} glareMaxOpacity={0.12} scale={1.02} className="w-full">
            <motion.div className="rounded-2xl bg-[#232526]/80 shadow-xl p-8 md:p-12 border border-[#434343]/60 text-protext font-semibold text-lg md:text-xl hover:scale-105 transition-transform" variants={cardVariants} initial="rest" whileHover="hover" animate="rest">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">🏆</span>
                <h2 className="text-3xl font-bold text-cyan drop-shadow">Certifications</h2>
              </div>
              <ul className="list-disc pl-6 space-y-2">
                <li>Oracle Java</li>
                <li>Infosys Springboard (AI, Java, ML)</li>
                <li>Google Cloud Digital Leader</li>
                <li>Cisco Packet Tracer, Networking</li>
                <li>Skillrack (C, Java)</li>
              </ul>
            </motion.div>
          </Tilt>
        </motion.section>
        {/* Achievements Section */}
        <motion.section id="achievements" className="max-w-4xl mx-auto px-4 scroll-mt-24" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true} glareMaxOpacity={0.12} scale={1.02} className="w-full">
            <motion.div className="rounded-2xl bg-[#232526]/80 shadow-xl p-8 md:p-12 border border-[#434343]/60 text-protext font-semibold text-lg md:text-xl hover:scale-105 transition-transform" variants={cardVariants} initial="rest" whileHover="hover" animate="rest">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">🎯</span>
                <h2 className="text-3xl font-bold text-cyan drop-shadow">Achievements</h2>
              </div>
              <ul className="list-disc pl-6 space-y-2">
                <li>Runner-up – Zonal Hockey 2024</li>
                <li>Hindi Diploma – Central Hindi Directorate</li>
                <li>Runner-up – Smart India Hackathon 2024</li>
                <li>MSME proposal selected at college level</li>
              </ul>
            </motion.div>
          </Tilt>
        </motion.section>
        {/* Education Section */}
        <motion.section id="education" className="max-w-4xl mx-auto px-4 scroll-mt-24" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true} glareMaxOpacity={0.12} scale={1.02} className="w-full">
            <motion.div className="rounded-2xl bg-[#232526]/80 shadow-xl p-8 md:p-12 border border-[#434343]/60 text-protext font-semibold text-lg md:text-xl hover:scale-105 transition-transform" variants={cardVariants} initial="rest" whileHover="hover" animate="rest">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">🎓</span>
                <h2 className="text-3xl font-bold text-cyan drop-shadow">Education</h2>
              </div>
              <ul className="list-disc pl-6 space-y-2">
                <li><b>B.Tech AI & DS</b> – Kamaraj College of Engineering (2022–2026), GPA: 7.1</li>
                <li><b>HSLC</b> – 75.5% (2019–2020)</li>
                <li><b>SSLC</b> – 72.8% (2019–2020)</li>
              </ul>
            </motion.div>
          </Tilt>
        </motion.section>
        {/* Contact Section */}
        <motion.section id="contact" ref={contactRef} className="max-w-4xl mx-auto px-4 mb-12 scroll-mt-24" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="font-heading text-3xl font-bold mb-4 text-cyan tracking-tight">Contact</h2>
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl bg-[#232526]/80 shadow-2xl p-8 border border-[#434343]/60 flex flex-col gap-4 max-w-xl mx-auto w-full"
          >
            <input name="name" value={form.name} onChange={handleChange} required placeholder="Your Name" className="rounded-lg px-4 py-2 bg-[#232526]/40 text-white border border-blueberry focus:ring-2 focus:ring-cyan outline-none" />
            <input name="email" value={form.email} onChange={handleChange} required type="email" placeholder="Your Email" className="rounded-lg px-4 py-2 bg-[#232526]/40 text-white border border-blueberry focus:ring-2 focus:ring-cyan outline-none" />
            <textarea name="message" value={form.message} onChange={handleChange} required placeholder="Your Message" rows={4} className="rounded-lg px-4 py-2 bg-[#232526]/40 text-white border border-blueberry focus:ring-2 focus:ring-cyan outline-none" />
            <button type="submit" className="mt-2 px-6 py-2 bg-blueberry text-white font-bold rounded-lg shadow hover:bg-cyan transition">Send</button>
            {status && <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-sm text-cyan mt-2 bg-[#1a1a1a]/80 px-4 py-2 rounded-lg shadow-lg border border-cyan/40">{status}</motion.div>}
          </form>
        </motion.section>
      </div>
      <Footer />
    </motion.div>
  );
}

export default App;
