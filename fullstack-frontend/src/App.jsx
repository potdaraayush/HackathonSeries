import React, { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  const handleClick = async () => {
    try {
      const res = await fetch('https://coral-app-jqhyw.ondigitalocean.app/api/message');
      const data = await res.json();
      setMessage(data.message);
    } catch (error) {
      console.error('Error fetching from backend:', error);
      setMessage('Backend not responding');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to the Fullstack Hackathon Series</h1>
      <p>This is your first React component!</p>
      <button onClick={handleClick}>Connect to Backend</button>
      {message && <p style={{ marginTop: '20px', color: 'green' }}>{message}</p>}
    </div>
  );
}

export default App;






















































































