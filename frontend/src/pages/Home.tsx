
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Users, Clock, Shield, Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Users className="w-8 h-8 text-emerald-600" />,
      title: "Expert Doctors",
      description: "Connect with qualified healthcare professionals across multiple specialties"
    },
    {
      icon: <Clock className="w-8 h-8 text-emerald-600" />,
      title: "Real-time Queues",
      description: "Track live queue status and estimated waiting times"
    },
    {
      icon: <Shield className="w-8 h-8 text-emerald-600" />,
      title: "Secure & Reliable",
      description: "Your health information is protected with advanced security measures"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      text: "DocLink made it so easy to find and book appointments with specialists. The queue tracking feature is amazing!",
      rating: 5
    },
    {
      name: "John Peterson",
      text: "Finally, a platform that connects me with quality healthcare providers. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <div className="home-container">
      {/* Header */}
      <header className="home-header">
        <div className="home-header-content">
          <div className="home-logo">
            <div className="home-logo-icon">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <div className="home-logo-text">
              <h1>DocLink</h1>
              <p>Connect with Healthcare Excellence</p>
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
      </header>

      {/* Hero Section */}
      <section className="home-hero">
        <div className="home-hero-content">
          <div className="hero-text">
            <h2>
              Your Gateway to 
              <span> Quality Healthcare</span>
            </h2>
            <p>
              Connect with experienced doctors, track real-time queues, and book appointments seamlessly. 
              Your health journey starts here with DocLink - where healthcare meets technology.
            </p>
            <div className="home-hero-buttons">
              <Button 
                size="lg" 
                onClick={() => navigate('/register')}
              >
                Get Started Today
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => navigate('/signin')}
              >
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="home-features">
        <div className="home-features-content">
          <div className="home-features-header">
            <h3>Why Choose DocLink?</h3>
            <p>Experience healthcare like never before</p>
          </div>
          <div className="home-features-grid">
            {features.map((feature, index) => (
              <Card key={index} className="home-feature-card">
                <CardContent className="home-feature-card-content">
                  <div>{feature.icon}</div>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="home-stats">
        <div className="home-stats-content">
          <div className="home-stats-grid">
            <div className="home-stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Expert Doctors</div>
            </div>
            <div className="home-stat-item">
              <div className="stat-number">100+</div>
              <div className="stat-label">Healthcare Locations</div>
            </div>
            <div className="home-stat-item">
              <div className="stat-number">1000+</div>
              <div className="stat-label">Happy Patients</div>
            </div>
            <div className="home-stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="home-testimonials">
        <div className="home-testimonials-content">
          <div className="home-testimonials-header">
            <h3>What Our Patients Say</h3>
            <p>Real experiences from real people</p>
          </div>
          <div className="home-testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="home-testimonial-card">
                <CardContent className="home-testimonial-content">
                  <div className="home-testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="home-testimonial-text">"{testimonial.text}"</p>
                  <div className="home-testimonial-author">- {testimonial.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="home-cta">
        <div className="home-cta-content">
          <h3>Ready to Get Started?</h3>
          <p>
            Join thousands of patients who trust DocLink for their healthcare needs
          </p>
          <Button 
            size="lg" 
            onClick={() => navigate('/register')}
          >
            Register Now - It's Free!
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <div className="home-footer-content">
          <div className="home-footer-grid">
            <div>
              <div className="home-footer-logo">
                <div className="home-footer-logo-icon">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4>DocLink</h4>
                  <p>Healthcare Excellence</p>
                </div>
              </div>
              <p>
                Connecting patients with quality healthcare providers across the nation.
              </p>
            </div>
            <div className="home-footer-section">
              <h5>Quick Links</h5>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Find Doctors</a></li>
                <li><a href="#">Specialties</a></li>
                <li><a href="#">Locations</a></li>
              </ul>
            </div>
            <div className="home-footer-section">
              <h5>Support</h5>
              <ul>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
            <div className="home-footer-section">
              <h5>Contact Info</h5>
              <ul>
                <li>📞 +94 11 234 5678</li>
                <li>✉️ info@doclink.lk</li>
                <li>📍 Colombo, Sri Lanka</li>
              </ul>
            </div>
          </div>
          <div className="home-footer-bottom">
            <p>&copy; 2024 DocLink. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
