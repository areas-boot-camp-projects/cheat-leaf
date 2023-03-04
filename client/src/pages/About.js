import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-wrapper">
        <div className="about-header">
          <h1>About Us</h1>
        </div>
        <div className="about-content">
          <h2>What is Cheat Leaf?</h2>
          <p>
          Cheat Leaf is a cool hub for posting and hosting all of your various data and utilities to get your work done faster! Need some help figuring out some code? Search our Cheat Leaf forest of information for the leaf that helps you the most!
          </p>
          <h2>Who can use our website?</h2>
          <p>
          Our forest is open to everyone who wants to share their ideas and connect with like-minded individuals. Whether you're a student, a professional, an entrepreneur, or just someone who wants to express themselves, our website welcomes you.
          </p>
          <h2>Why choose Cheat Leaf?</h2>
          <p>
          Our website offers a user-friendly interface that makes it easy to create and publish your content. We also provide a range of tools and resources to help you optimize your content for search engines, and find what you need fast! Some information on Cheat Leaf might not be found anywhere else. This is what makes Cheat Leaf unique!          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
