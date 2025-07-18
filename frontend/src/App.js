import React from 'react';
import logo from './logo.svg'; // Assuming you have this
import './App.css'; // Assuming you have this
import Navigation from './components/Navigation'; // Correct import path for the updated Navigation component
import Home from './pages/Home'; // Assuming you have this
import Footer from './components/Footer'; // Assuming you have this



function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
