import React from 'react';

const Services = () => {
  return (
    <div className="services-container">
      <h2>Our Services</h2>
      <ul className="service-list">
        <li className="service-item">
          <h3>Web Development</h3>
          <p>We offer custom web development solutions tailored to your business needs. Our experienced team of developers will create scalable and responsive websites using the latest technologies.</p>
        </li>
        <li className="service-item">
          <h3>Mobile App Development</h3>
          <p>Need a mobile app for your business? We've got you covered. Our mobile app development services include native and cross-platform app development for iOS and Android platforms.</p>
        </li>
        <li className="service-item">
          <h3>UI/UX Design</h3>
          <p>Good design is essential for a successful digital product. Our talented designers will create intuitive user interfaces and engaging user experiences to make your app or website stand out.</p>
        </li>
      </ul>
    </div>
  );
};

export default Services;
