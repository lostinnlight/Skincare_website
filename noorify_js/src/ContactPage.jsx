import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import ProductsPage from './ProductsPage';
import ContactPage from './ContactPage'; // Import the ContactPage component
import './App.css'; // You can have global styles here

function App() {
    return (
        <Router>
            <div className="app">
                <header className="header">
                    <div className="container">
                        <Link to="/" className="logo">
                            <img
                                src="https://placehold.co/100x50/E879F9/ffffff?text=Noorify&font=Montserrat"
                                alt="Noorify Logo"
                                className="logo-image"
                            />
                        </Link>
                        <nav className="nav">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                            <Link to="/about" className="nav-link">
                                About
                            </Link>
                            <Link to="/products" className="nav-link">
                                Products
                            </Link>
                            <Link to="/contact" className="nav-link">
                                Contact
                            </Link>
                        </nav>
                    </div>
                </header>

                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/products" element={<ProductsPage />} />
                    <Route path="/contact" element={<ContactPage />} /> {/* Add the route for ContactPage */}
                    {/* You would add a route for /about similarly */}
                </Routes>

                <footer className="footer">
                    <div className="container">
                        &copy; 2024 Noorify. All rights reserved.
                    </div>
                </footer>
            </div>
        </Router>
    );
}

export default App;