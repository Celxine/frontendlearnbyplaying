import React, { useState } from "react";
import "./SignUpForm.css";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div
      className="signup-page"
      style={{
        backgroundImage: `url('https://s3-alpha-sig.figma.com/img/9dbe/df0f/39f82077c4f5a4c6c0af396008b2ef08?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=M1ex6TlaY7gUw-e1pKJtZ7qNHp5vrf0oFPbNofUkWNx56LsGkByYQusCR-Uk~A91Rtrne7o5jZeN8Y~ScoWOf1vt9OPcIFgSa7DjLTgx91Q8IZfHc7BU-CaHhYs2iHJQHwCB5LbT4kp~Wwz4jIin9YywL3bEduVE1zCkQgQEj2WvtTRVp9Ui80rK4Cj04KHvf8v25I4pObpFdRADlf-JA36WRrWFEMHBVsveRCnCcMiVtwQmixFhYwpbKmhGXcbxyIAG3oFMHltriPij-HQrhoV~hKHN6Wu1T8PwpZ7eWRbWJZMZ1pSVAesb4pwgOYGUCRayieJyiY2ANZDpvyWm9w__')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    >
      {/* Background decorations */}
      <div className="decoration decoration-1"></div>
      <div className="decoration decoration-2"></div>

      <div className="signup-container">
        <div className="form-section">
          <div className="signup-logo">
            <div className="logo-icon">
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="white" fill="none" />
                <path
                  d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z"
                  fill="white"
                />
                <path
                  d="M6 16C6 13.2 8.2 11 11 11H13C15.8 11 18 13.2 18 16"
                  stroke="white"
                  fill="none"
                />
              </svg>
            </div>
            <h2>Sign Up</h2>
          </div>
        
          <p className="signup-intro">
            Your journey starts here! Already have an account?{" "}
            <a href="/login" className="login-link">
              Login
            </a>
          </p>

          <div className="auth-options">
            <button className="google-login">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="Google"
                className="google-icon"
                width="20"
                height="20"
              />
              Login with Google
            </button>
            <button className="institution-code">
              <span className="institution-icon">🏫</span>
              Enter Institution Code
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Lydia Smart"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="lydiasmart1@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="••••••••••"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="••••••••••"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            <div className="checkbox-group">
              <input
                type="checkbox"
                id="agreeToTerms"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                required
              />
              <label htmlFor="agreeToTerms">
                I agree to the{" "}
                <a href="/privacy-policy" className="policy-link">
                  Privacy&Policy
                </a>
              </label>
            </div>

            <button type="submit" className="signup-button">
              Create Account
            </button>
          </form>
        </div>

        <div className="illustration-container">
          <img
            src="/rocket.png"
            alt="Rocket launching through space"
            className="rocket-illustration"
          />
        </div>
      </div>  
    </div>
  );
};

export default SignUpForm;
