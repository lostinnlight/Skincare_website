import React from 'react';
import './HomePage.css'; // Import the CSS file

const HomePage = () => {
  return (
    <div className="home-page-container">
      <main className="main-content">
        <section id="home" className="hero-section">
          <div className="container">
            <div className="hero-content">
              <div className="hero-text">
                <h1 className="hero-title">Discover Your Radiant Skin</h1>
                <p className="hero-subtitle">
                  Welcome to Noorify, where we believe in the beauty of healthy, glowing skin. Explore our
                  premium skincare products, carefully crafted to enhance your natural radiance.
                </p>
                <button
                  onClick={() => (window.location.href = '/products')}
                  className="shop-now-button"
                >
                  Shop Now
                </button>
              </div>
              <div className="hero-image">
                <img
                  src="https://placehold.co/600x400/f4d4f4/ffffff?text=Skincare+Products&font=Montserrat"
                  alt="Skincare Products"
                  className="hero-image-src"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;