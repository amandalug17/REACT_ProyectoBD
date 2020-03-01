import React from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Components/Home'

function App() {
  return (
    <div>
        <div>
          <Navbar />
        </div>
        <div>
          <Home />
        </div>
        <div>
          <Footer />
        </div>
    </div>
  );
}

export default App;
