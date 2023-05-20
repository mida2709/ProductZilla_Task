import React from 'react';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Our Website</h1>
      <div className="post-wrapper">
        <div className="post-card">
          <h3>Latest News</h3>
          <p>Stay updated with the latest news and developments in our industry.</p>
          <a href="#" className="read-more-link">Read More</a>
        </div>
        <div className="post-card">
          <h3>Featured Services</h3>
          <p>Discover our featured services that can help your business grow.</p>
          <a href="#" className="read-more-link">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
