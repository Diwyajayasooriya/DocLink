import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, ArrowRight, User, Stethoscope, Building, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import './Home.css';

// Import images
import Deeshan from '@/assets/Deeshan.jpg';
import Diwya from '@/assets/Diwya.jpg';
import Shehan from '@/assets/Shehan.jpg';
import Shane from '@/assets/Shane.jpg';
import Chamika from '@/assets/Chamika.jpg';
import docImage from '@/assets/doc1.png';
import patientImage from '@/assets/pat.png';
import hospitalImage from '@/assets/hos.png';
import dispensaryImage from '@/assets/dis.png';
import swanLogo from '@/assets/swan.png'

const Home = () => {
  const navigate = useNavigate();

  const teamMembers = [
    {
      name: "R.M.S. Deeshan Wijesinghe",
      role: "Lead Backend Developer",
      description: "Deeshan is the architect behind Doclink's robust backend, ensuring seamless data flow and security.",
      image: Deeshan
    },
    {
      name: "J.A.D.N. Jayasooriya",
      role: "Mobile App Specialist",
      description: "Jayasooriya brings Doclink to life on mobile devices, ensuring a powerful user experience on iOS and Android.",
      image: Diwya
    },
    {
      name: "Shehan Dewnith",
      role: "Frontend Web Developer",
      description: "Shehan specializes in creating responsive and dynamic web interfaces, connecting users seamlessly to Doclink.",
      image: Shehan
    },
    {
      name: "S.M. Baines",
      role: "UI/UX Designer",
      description: "Baines crafts the intuitive and visually appealing interfaces that make Doclink a pleasure to use for everyone.",
      image: Shane
    },
    {
      name: "Chamika Uduwaka",
      role: "QA & Testing Specialist",
      description: "Chamika ensures the flawless performance and reliability of the Doclink platform through meticulous testing.",
      image: Chamika
    }
  ];

  return (
    <div className="home-container">
      {/* Header */}
      {/* <header className="home-header">
        <div className="home-header-content">
          <div className="home-logo">
            <div className="home-logo-icon">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <div className="home-logo-text">
              <h1>DocLink</h1>
            </div>
          </div>
          <div className="home-header-buttons">
            <Button 
              variant="outline" 
              onClick={() => navigate('/signin')}
            >
              Sign In
            </Button>
            <Button 
              onClick={() => navigate('/register')}
            >
              Register Now
            </Button>
          </div>
        </div>
      </header> */}

      {/* Hero Section */}
      <section className="home-hero" id="home">
        <div className="home-hero-content">
          <div className="hero-text">
            <div className="heart-icon">
              <Heart className="w-8 h-8 text-emerald-600" />
            </div>
            <h2>
              Your Health, Connected With
              <span>DOCLINK</span>
            </h2>
            <p>
              Bridging the gap between patients, doctors, hospitals, 
              and pharmacies with seamless digital healthcare 
              management
            </p>
            <div className="home-hero-buttons">
              <Button 
                size="lg" 
                onClick={() => navigate('/register')}
              >
                GET STARTED <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Card Section */}
      <section className="doctor-card" id="doctor-card">
        <div className="doctor-card-container">
          <div className="doctor-card-image">
            <img src={docImage} alt="Doctor Illustration" />
          </div>
          <div className="card-content">
            <h2>Are you a Doctor?</h2>
            <Button 
              className="card-button"
              onClick={() => navigate('/doctor-register')}
            >
              Sign Up
            </Button>
          </div>
          <div className="blob blob-purple"></div>
          <div className="blob blob-green"></div>
        </div>
      </section>

      {/* Patient Card Section */}
      <section className="patient-card" id="patient-card">
        <div className="patient-card-container">
          <div className="patient-card-image">
            <img src={patientImage} alt="Patient Illustration" />
          </div>
          <div className="card-content">
            <h2>Register as a Patient</h2>
            <Button 
              className="card-button"
              onClick={() => navigate('/register')}
            >
              Sign Up
            </Button>
          </div>
          <div className="blob blob-purple"></div>
          <div className="blob blob-green"></div>
        </div>
      </section>

      {/* Hospital & Dispensary Section */}
      <section className="hospital-dispensary-section">
        {/* Hospital Registration Card */}
        <div className="hospital-card-wrapper">
          <div className="hospital-card-container">
            <div className="hospital-card-content">
              <h2>Register Hospital</h2>
              <p className="hospital-card-text">Join our platform to manage patient records and appointments seamlessly.</p>
              <Button 
                className="hospital-signup-button"
                onClick={() => navigate('/hospital-register')}
              >
                Sign Up
              </Button>
            </div>
            <div className="hospital-card-image">
              <img src={hospitalImage} alt="Hospital Icon" />
            </div>
          </div>
        </div>

        {/* Dispensary Registration Card */}
        <div className="dispensary-card-wrapper">
          <div className="dispensary-card-container">
            <div className="dispensary-card-content">
              <h2>Register Dispensary</h2>
              <p className="dispensary-card-text">Connect with patients and doctors for efficient prescription management.</p>
              <Button 
                className="dispensary-signup-button"
                onClick={() => navigate('/dispensary-register')}
              >
                Sign Up
              </Button>
            </div>
            <div className="dispensary-card-image">
              <img src={dispensaryImage} alt="Dispensary Icon" />
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-us-blackswan" id="about-us">
        <div className="about-us-logo">
          <img src= {swanLogo} alt="Blackswan Logo" />
        </div>

        <div className="about-us-content">
          <h2 className="about-us-heading">About <span className="gradient-text-alt">Doclink</span></h2>
          <p className="about-us-paragraph">
            At <strong>Blackswan</strong>, we are a pioneering mobile and web application development team dedicated to 
            transforming healthcare. Our five members are proudly from the <strong>Department of Computer Engineering, 
              University of Peradeniya</strong>. We engineered the <strong>Doclink</strong> platform from the ground up, 
              driven by a singular vision: to create a seamless, intuitive, and secure digital ecosystem that connects patients,
               doctors, hospitals, and pharmacies. Our passion lies in leveraging cutting-edge technology to bridge 
               the existing gaps in healthcare management, empowering both providers and patients with unparalleled access and 
               efficiency. With a commitment to innovation and user-centric design, Blackswan is building the future of 
               connected health, one robust application at a time.
          </p>
          <p className="about-us-subtext">
            <em>Blackswan: Unleashing Innovation in Digital Health.</em>
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="developer-team-section" id="team">
        <div className="heading">
          <h2>Meet Our Talented Team</h2>
        </div>

        <div className="team-members-container">
          {teamMembers.map((member, index) => (
            <Card key={index} className="team-member-card">
              <CardContent>
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-description">
                  {member.description}
                </p>
                <div className="member-social">
                  <a href="#" aria-label="LinkedIn Profile"><i className="bx bxl-linkedin-square"></i></a>
                  <a href="#" aria-label="GitHub Profile"><i className="bx bxl-github"></i></a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="doclink-footer">
        <div className="doclink-footer-box about-blackswan">
          <h3>Blackswan</h3>
          <p>
            Blackswan is a dedicated mobile and web application development team. We build innovative platforms like Doclink to revolutionize healthcare management, focusing on seamless connections, efficiency, and user-centric design.
          </p>
          <div className="social">
            <a href="#" aria-label="Facebook"><i className="bx bxl-facebook-circle"></i></a>
            <a href="#" aria-label="Twitter"><i className="bx bxl-twitter"></i></a>
            <a href="#" aria-label="Instagram"><i className="bx bxl-instagram-alt"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="bx bxl-linkedin"></i></a>
          </div>
        </div>

        <div className="doclink-footer-box doclink-links">
          <h3>Doclink Platform</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about-us">About Us</a></li>
            <li><a href="#doctor-card">Register Doctor</a></li>
            <li><a href="#patient-card">Register Patient</a></li>
            <li><a href="#">Register Hospital</a></li>
            <li><a href="#">Register Dispensary</a></li>
          </ul>
        </div>

        <div className="doclink-footer-box services-links">
          <h3>Our Services</h3>
          <ul>
            <li><a href="#">Mobile App Development</a></li>
            <li><a href="#">Web Development</a></li>
            <li><a href="#">UI/UX Design</a></li>
            <li><a href="#">Digital Healthcare Solutions</a></li>
            <li><a href="#">Custom Software</a></li>
          </ul>
        </div>

        <div className="doclink-footer-box contact-info">
          <h3>Contact Us</h3>
          <div className="contact">
            <span><i className="bx bx-map-pin"></i> 123 Health St, Connected City, CA 90210</span>
            <span><i className="bx bx-phone"></i> +1 (555) 123-4567</span>
            <span><i className="bx bx-envelope"></i> info@blackswan.com</span>
            <span><i className="bx bx-support"></i> support@doclink.com</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;