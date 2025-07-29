import React, { useState } from 'react';

const Home = () => {
  const [chatInput, setChatInput] = useState('')

  const handleInputChange = (e) => {
    setChatInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Chat message:', chatInput)
    setChatInput('')
    // Add your chat functionality here
  }

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo">SNX</div>
        <nav className="nav-links">
          <a href="#know-us" className="nav-link">Know Us</a>
          <a href="#our-work" className="nav-link">Our Work</a>
          <a href="#services" className="nav-link">Field of Services</a>
        </nav>
      </header>

      <main className="hero">
        <div className="hero-subtitle">WE ARE</div>
        <h1 className="hero-title">SCHENOXIS</h1>
        
      </main>
    </div>
  )
}

export default Home;
