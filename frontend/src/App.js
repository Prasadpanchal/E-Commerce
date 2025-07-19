import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; // Assuming you have this

// Import your components and pages
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Product from './pages/Product'; // <--- You need to import your Product page here
import Footer from './components/Footer';

function App() {
  return (
    // Wrap your entire application with Router
    <Router>
      <div className="App">
        <Navigation /> {/* Navigation component should be outside Routes if it's always visible */}

        {/* Define your routes within the Routes component */}
        <Routes>
          {/* Route for the Home page */}
          <Route path="/" element={<Home />} />

          {/* Route for the Product page */}
          <Route path="/product" element={<Product />} />

          {/* Add more routes here as needed, e.g., for an About Us page */}
          {/* <Route path="/about-us" element={<AboutUs />} /> */}
        </Routes>

        <Footer /> {/* Footer component should be outside Routes if it's always visible */}
      </div>
    </Router>
  );
}

export default App;