
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, ArrowLeft, Eye, EyeOff } from 'lucide-react';
import './SignIn.css';

const SignIn = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      navigate('/dashboard');
    } else {
      alert('Please fill in all fields');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="signin-container">
      <div className="signin-wrapper">
        <div className="signin-header">
          <button
            onClick={() => navigate('/')}
            className="back-button"
          >
            <ArrowLeft size={16} />
            Back to Home
          </button>
          <div className="brand-container">
            <div className="brand-icon">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="brand-title">
                DocLink
              </h1>
            </div>
          </div>
          <p className="signin-subtitle">Welcome back! Sign in to your account</p>
        </div>

        <div className="signin-card">
          <div className="card-header">
            <h2 className="card-title">Sign In</h2>
            <p className="card-description">Enter your credentials to access your dashboard</p>
          </div>
          <div className="card-content">
            <form onSubmit={handleSubmit} className="form-container">
              <div className="form-field">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-field">
                <label htmlFor="password" className="form-label">Password</label>
                <div className="password-container">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="password-toggle"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <div className="form-options">
                <label className="remember-me">
                  <input type="checkbox" className="remember-checkbox" />
                  <span>Remember me</span>
                </label>
                <a href="#" className="forgot-link">
                  Forgot password?
                </a>
              </div>

              <button type="submit" className="signin-button">
                Sign In
              </button>
            </form>

            <div className="register-link-container">
              <p>
                Don't have an account?{' '}
                <button
                  onClick={() => navigate('/register')}
                  className="register-link"
                >
                  Register here
                </button>
              </p>
            </div>
          </div>
        </div>

        <div className="terms-notice">
          <p>By signing in, you agree to our Terms of Service and Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
