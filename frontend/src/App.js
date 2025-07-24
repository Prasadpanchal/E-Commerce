import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; // Assuming you have this

// Import your components and pages
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Product from './pages/Product'; 
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsCondition from './pages/TermsCondition';
import SignUpPage from './pages/SignUpPage';
import AboutUs from './pages/AboutUs';
import Footer from './components/Footer';

// नवीन लॉगिन पेजेस इम्पोर्ट करा (तुम्हाला हे कंपोनेंट्स तयार करावे लागतील)
import UserLoginPage from './pages/UserLoginPage'; // UserLoginPage.js इम्पोर्ट केले
import AdminLoginPage from './pages/AdminLoginPage'; // AdminLoginPage.js इम्पोर्ट करा (जर तुम्ही ते तयार केले असेल)
// import MyProfilePage from './pages/MyProfilePage'; // MyProfilePage.js इम्पोर्ट करा (जर तुम्ही ते तयार केले असेल)


function App() {
  return (
    // Wrap your entire application with Router
    <Router>
      <div className="App">
        <Navigation /> {/* Navigation component should be outside Routes if it's always visible */}

        {/* Define your routes within the Routes component */}
        <div className="main-content-wrapper"> {/* कंटेंटसाठी रॅपर, CSS मध्ये पॅडिंगसाठी उपयुक्त */}
          <Routes>
            {/* Route for the Home page */}
            <Route path="/" element={<Home />} />

            {/* Route for the Product page */}
            <Route path="/product" element={<Product />} />

            {/* Route for the Privacy Policy page */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} /> 

            {/* Route for the Terms & Conditions page */}
            <Route path="/terms-condition" element={<TermsCondition />} /> 

            {/* Route for the About Us page */}
            <Route path="/about-us" element={<AboutUs />} />

            {/* नवीन लॉगिन आणि प्रोफाइल रूट्स */}
            <Route path="/user-login" element={<UserLoginPage />} /> {/* User Login Page साठी रूट */}
            <Route path="/admin-login" element={<AdminLoginPage />} /> {/* Admin Login Page साठी रूट (अनकमेंट करा आणि कंपोनेंट तयार करा) */}
            {/* <Route path="/my-profile" element={<MyProfilePage />} /> */} {/* My Profile Page साठी रूट (अनकमेंट करा आणि कंपोनेंट तयार करा) */}

            <Route path="/signup" element={<SignUpPage />} />

            {/* Add more routes here as needed, e.g., for a Contact Us page */}
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </div>

        <Footer /> {/* Footer component should be outside Routes if it's always visible */}
      </div>
    </Router>
  );
}

export default App;
