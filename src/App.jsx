import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Rocket,
  ShieldCheck
} from 'lucide-react';
import { experience, profile, projects, skills } from './portfolioData.js';

function Header() {
  const navItems = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

  return (
    <header className="site-header">
      <a className="logo" href="#home" aria-label="Go to home section">
        SG
      </a>
      <nav aria-label="Main navigation">
        {navItems.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`}>
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero section-grid">
      <div className="hero-content">
        <p className="eyebrow">Open to graduate, junior, and full-stack developer roles</p>
        <h1>
          Hi, I’m <span>{profile.name}</span>.
          <br /> I build web, mobile, and cloud applications.
        </h1>
        <p className="hero-summary">{profile.summary}</p>
        <div className="hero-actions">
          <a className="button primary" href="#projects">
            View Projects <ArrowUpRight size={18} />
          </a>
          <a className="button secondary" href={profile.resume} download>
            Download Resume <Download size={18} />
          </a>
        </div>
        <div className="social-row" aria-label="Social links">
          <a href={profile.github} target="_blank" rel="noreferrer">
            <Github size={19} /> GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={19} /> LinkedIn
          </a>
          <a href={`mailto:${profile.email}`}>
            <Mail size={19} /> Email
          </a>
        </div>
      </div>

      <div className="hero-card" aria-label="Profile overview card">
        <div className="profile-avatar">SG</div>
        <h2>{profile.role}</h2>
        <p className="location">
          <MapPin size={17} /> {profile.location}
        </p>
        <div className="quick-stats">
          <div>
            <strong>2.4+</strong>
            <span>Years software experience</span>
          </div>
          <div>
            <strong>4+</strong>
            <span>Portfolio projects</span>
          </div>
          <div>
            <strong>Full-stack</strong>
            <span>React, Node, AWS, Firebase</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ icon, label, title, description }) {
  return (
    <div className="section-header">
      <p className="section-label">
        {icon} {label}
      </p>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="content-section">
      <SectionHeader
        icon={<Rocket size={18} />}
        label="About"
        title="A practical software developer with real project experience"
        description="My background combines professional full-stack engineering experience with current Master of IT studies in Australia. I enjoy building software that is clean, useful, and easy to use."
      />
      <div className="about-grid">
        <article className="panel">
          <h3>What I do</h3>
          <p>
            I design and develop user-focused applications across web, mobile, and cloud platforms. My strongest areas are React.js, Node.js, AWS, Flutter, Firebase, and building clean user interfaces.
          </p>
        </article>
        <article className="panel">
          <h3>What I am looking for</h3>
          <p>
            I am preparing for software developer, frontend developer, full-stack developer, junior cloud developer, and graduate technology roles in Australia.
          </p>
        </article>
        <article className="panel">
          <h3>How I work</h3>
          <p>
            I focus on understanding requirements, building simple solutions first, testing carefully, documenting my work, and improving the user experience through iteration.
          </p>
        </article>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="content-section">
      <SectionHeader
        icon={<Code2 size={18} />}
        label="Skills"
        title="Technical skills"
        description="A focused skill set for full-stack, frontend, mobile, and cloud-backed application development."
      />
      <div className="skills-grid">
        {skills.map((group) => (
          <article className="skill-card" key={group.title}>
            <h3>{group.title}</h3>
            <div className="tags">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="content-section">
      <SectionHeader
        icon={<BriefcaseBusiness size={18} />}
        label="Projects"
        title="Selected work"
        description="These projects show practical software delivery across mobile apps, cloud systems, AI workflows, and full-stack development."
      />
      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-topline">
              <span>{project.type}</span>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul>
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <div className="tags">
              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub <ArrowUpRight size={16} />
              </a>
              <a href={project.demo} target="_blank" rel="noreferrer">
                Demo <ArrowUpRight size={16} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="content-section">
      <SectionHeader
        icon={<GraduationCap size={18} />}
        label="Experience"
        title="Experience and education"
        description="A combination of professional software engineering experience and current postgraduate study."
      />
      <div className="timeline">
        {experience.map((item) => (
          <article className="timeline-card" key={`${item.role}-${item.company}`}>
            <div>
              <h3>{item.role}</h3>
              <p>{item.company}</p>
            </div>
            <span className="period">{item.period}</span>
            <ul>
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="content-section contact-section">
      <SectionHeader
        icon={<ShieldCheck size={18} />}
        label="Contact"
        title="Let’s connect"
        description="I am open to software development, frontend, full-stack, cloud, and graduate technology opportunities in Australia."
      />
      <div className="contact-card">
        <a className="button primary" href={`mailto:${profile.email}`}>
          Email Me <Mail size={18} />
        </a>
        <a className="button secondary" href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn <Linkedin size={18} />
        </a>
        <a className="button secondary" href={profile.github} target="_blank" rel="noreferrer">
          GitHub <Github size={18} />
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} {profile.name}. Built with React and Vite.</p>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
