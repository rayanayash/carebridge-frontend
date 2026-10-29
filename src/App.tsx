import { ArrowRight, CalendarDays, HeartPulse, ShieldCheck, Stethoscope, Users } from "lucide-react";
import "./App.css";
import heroImage from "./assets/hero.png";
import { Link } from "react-router-dom";

const services = [
  {
    icon: HeartPulse,
    title: "Patient Care",
    description: "Manage your healthcare journey with convenient access to essential services.",
  },
  {
    icon: CalendarDays,
    title: "Easy Appointments",
    description: "Find available doctors and schedule your appointments with ease.",
  },
  {
    icon: Stethoscope,
    title: "Expert Doctors",
    description: "Connect with healthcare professionals across multiple specialties.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Healthcare",
    description: "Your information is protected through secure access and privacy-focused systems.",
  },
];

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <div className="container nav-content">
          <a href="/" className="logo">
            <HeartPulse size={30} />
            <span>CareBridge</span>
          </a>

          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="nav-actions">
            <Link to="/login" className="login-btn">
              Login
            </Link>
            <Link to="/register" className="register-btn">
              Get Started
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="container hero-content">
            <div className="hero-text">
              <span className="badge">YOUR HEALTH, OUR PRIORITY</span>

              <h1>
                Better Healthcare.
                <br />
                <span>Better Together.</span>
              </h1>

              <p>
                CareBridge connects patients and healthcare professionals
                through a seamless digital healthcare experience.
                Book appointments, find doctors, and manage your care.
              </p>

              <div className="hero-actions">
                <Link to="/register" className="primary-btn">
                  Book an Appointment <ArrowRight size={18} />
                </Link>
                <Link to="/services" className="secondary-btn">
                  Explore Services
                </Link>
              </div>

              <div className="hero-stats">
                <div>
                  <Users size={24} />
                  <span>Patient-Centered</span>
                </div>
                <div>
                  <ShieldCheck size={24} />
                  <span>Privacy-Focused</span>
                </div>
              </div>
            </div>

            <div className="hero-image">
              <img src={heroImage} alt="Healthcare professional" />
              <div className="floating-card">
                <HeartPulse size={25} />
                <div>
                  <strong>Care Made Simple</strong>
                  <span>Connected healthcare services</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section" id="services">
          <div className="container">
            <div className="section-heading">
              <span className="section-label">OUR SERVICES</span>
              <h2>Healthcare Designed Around You</h2>
              <p>
                Explore the tools and services that make managing healthcare
                easier for patients and medical teams.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <div className="service-card" key={service.title}>
                    <div className="service-icon">
                      <Icon size={28} />
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <a href="#contact">
                      Learn More <ArrowRight size={16} />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="container about-content">
            <div>
              <span className="section-label">ABOUT CAREBRIDGE</span>
              <h2>Connecting People With Better Care</h2>
              <p>
                CareBridge is a healthcare management platform designed to
                simplify communication and coordination between patients,
                doctors, and hospital staff.
              </p>
              <p>
                Our goal is to create a more organized, accessible, and
                efficient healthcare experience.
              </p>
            </div>

            <div className="about-highlight">
              <HeartPulse size={45} />
              <h3>Healthcare, Connected.</h3>
              <p>
                One platform for patients, medical professionals,
                and hospital operations.
              </p>
            </div>
          </div>
        </section>

        <section className="cta-section" id="contact">
          <div className="container">
            <h2>Ready to Take Control of Your Healthcare?</h2>
            <p>Start your journey with CareBridge today.</p>
            <button className="cta-btn">
              Get Started <ArrowRight size={18} />
            </button>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-brand">
            <HeartPulse size={26} />
            <strong>CareBridge</strong>
          </div>
          <p>© {new Date().getFullYear()} CareBridge. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;