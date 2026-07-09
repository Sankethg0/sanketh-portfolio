import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Download,
  GraduationCap,
  Mail,
  MapPin,
  Rocket,
  ShieldCheck
} from 'lucide-react';
import { experience, profile, projects, skills } from './portfolioData.js';

function GitHubIcon({ size = 19 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M12 2C6.48 2 2 6.58 2 12.26c0 4.54 2.87 8.39 6.84 9.75.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.38-3.37-1.38-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.93.85.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.28 9.28 0 0 1 12 6.98c.85 0 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.95.68 1.92 0 1.38-.01 2.49-.01 2.83 0 .27.18.6.69.49A10.25 10.25 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"
      />
    </svg>
  );
}

function LinkedInIcon({ size = 19 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.45 8.03h4.1V23H.45V8.03ZM8.15 8.03h3.93v2.05h.06c.55-1.04 1.89-2.14 3.89-2.14 4.16 0 4.93 2.74 4.93 6.31V23h-4.1v-7.75c0-1.85-.03-4.23-2.58-4.23-2.58 0-2.98 2.02-2.98 4.1V23H8.15V8.03Z"
        transform="translate(1.5 0) scale(.95)"
      />
    </svg>
  );
}

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
            <GitHubIcon size={19} /> GitHub
          </a>

          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <LinkedInIcon size={19} /> LinkedIn
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
            I design and develop user-focused applications across web, mobile, and cloud platforms.
            My strongest areas are React.js, Node.js, AWS, Flutter, Firebase, and building clean user interfaces.
          </p>
        </article>

        <article className="panel">
          <h3>What I am looking for</h3>
          <p>
            I am preparing for software developer, frontend developer, full-stack developer, junior cloud developer,
            and graduate technology roles in Australia.
          </p>
        </article>

        <article className="panel">
          <h3>How I work</h3>
          <p>
            I focus on understanding requirements, building simple solutions first, testing carefully,
            documenting my work, and improving the user experience through iteration.
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
          LinkedIn <LinkedInIcon size={18} />
        </a>

        <a className="button secondary" href={profile.github} target="_blank" rel="noreferrer">
          GitHub <GitHubIcon size={18} />
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