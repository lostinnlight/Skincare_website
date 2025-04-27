import React from 'react';
import './ProductsPage.css';

const ProductCard = ({ name, description, imageUrl }) => (
  <div className="product-card">
    <img src={imageUrl} alt={name} className="product-card-image" />
    <h3 className="product-card-title">{name}</h3>
    <p className="product-card-description">{description}</p>
    <button className="add-to-cart-button">Add to Cart</button>
  </div>
);

const ProductsPage = () => {
  const productsData = [
    {
      name: 'Gentle Cleanser',
      description: 'A mild and effective cleanser for daily use.',
      imageUrl: 'https://placehold.co/300x300/e0f7fa/ffffff?text=Cleanser&font=Montserrat',
    },
    {
      name: 'Hydrating Facewash',
      description: 'Deeply cleanses and hydrates your skin.',
      imageUrl: 'https://placehold.co/300x300/e0f7fa/ffffff?text=Facewash&font=Montserrat',
    },
    {
      name: 'Brightening Serum',
      description: "Enhance your skin's radiance with our special serum.",
      imageUrl: 'https://placehold.co/300x300/e0f7fa/ffffff?text=Serum&font=Montserrat',
    },
    {
      name: 'Nourishing Moisturizer',
      description: 'Provides long-lasting hydration and nourishment.',
      imageUrl: 'https://placehold.co/300x300/e0f7fa/ffffff?text=Moisturizer&font=Montserrat',
    },
  ];

  return (
    <main className="flex-grow">
      <section id="products" className="products-section">
        <h2 className="products-title">Our Products</h2>
        <div className="products-grid">
          {productsData.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProductsPage;