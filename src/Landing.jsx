import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landing-page">
   
      <video className="video-background" autoPlay loop muted>
        <source src="https://s3-figma-videos-production-sig.figma.com/video/TEAM/1461332511894656024/bee8e30e8d68f272459d175a05afce1b2add5d48?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DpBApStKYsOUij8pJA8VPezC4OVkje7J1SAMNvOAYsB8KbuRmaj0jJR8Sc1kzB8hHMLNLpHMq9qw9rz-hq40Wg-pg1KrmC2M8scrMMmOzQNR2ur0pL3SZcsC3c5G8cUwhW7t4~8yW7GhITJApMitG85zjCX83QJ50LwkEaf6Rg2TdMzpCsSOwsyNv7vgeEHUkmeKGIPosjALLW82cvXsUy4UfvJgWK2eW9AKLUvpOjgNJSyl9kG2aL7ti9GxFizsl0Dlb2M~2hzspXTa-cU5y3Hr4RFLa8NX226VO0TY25G5v0rCrnh1u2ncS5Ef57bDr6dIDTl9L5YuUglYLmQnEA__" type="video/mp4" />
      </video>

     
       <div className="navbar">
        <div className="logo-text">🚀 EvolvED</div>

        <ul className="nav-links">
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/institutions">For Institutions</Link></li>
          <li><Link to="/learners" className="navbar-underline-link">For Learners</Link></li>
                   <li><Link to="/login" className="login-btn">Login</Link></li>
        </ul>

        <Link to="/get-started" className="get-started-btn">Get Started</Link>
      </div>

     
      <div className="content">
      <h1 className="main-title">Level Up Your <span className="learning">Learning</span></h1>
        <p className="description">
          Personalized, gamified, and AI powered learning built for the future.
        </p>
        <div className="cta-container">
          <div className="quest">Start Your Quest Today</div>
          <Link to="/join" className="join-now-btn">Join Now</Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;