import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '3rem', margin: '0' }}>🚀 TeleStack</h1>
          <p style={{ fontSize: '1.2rem', opacity: 0.8 }}>
            Serverless Functions Platform - Build with Zero Cost
          </p>
          <div style={{ marginTop: '30px' }}>
            <button 
              style={{
                padding: '12px 24px',
                fontSize: '16px',
                margin: '0 10px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer'
              }}
            >
              Get Started
            </button>
            <button 
              style={{
                padding: '12px 24px',
                fontSize: '16px',
                margin: '0 10px',
                backgroundColor: 'transparent',
                color: '#007bff',
                border: '2px solid #007bff',
                borderRadius: '8px',
                cursor: 'pointer'
              }}
            >
              Documentation
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '20px', 
          marginTop: '50px',
          maxWidth: '900px'
        }}>
          <div style={{ padding: '20px', background: 'rgba(255,255,255,0.1)', borderRadius: '10px' }}>
            <h3>⚡ Serverless Functions</h3>
            <p>Run code without managing servers</p>
          </div>
          <div style={{ padding: '20px', background: 'rgba(255,255,255,0.1)', borderRadius: '10px' }}>
            <h3>💰 Zero Cost</h3>
            <p>Built on free tiers forever</p>
          </div>
          <div style={{ padding: '20px', background: 'rgba(255,255,255,0.1)', borderRadius: '10px' }}>
            <h3>🔗 Telegram Powered</h3>
            <p>Leverage Telegram's infrastructure</p>
          </div>
        </div>

        {/* Status */}
        <div style={{ 
          marginTop: '40px', 
          padding: '15px',
          background: 'rgba(0,255,0,0.1)',
          borderRadius: '8px',
          border: '1px solid rgba(0,255,0,0.3)'
        }}>
          <strong>Status:</strong> 🟢 Systems Operational - Building MVP
        </div>
      </header>
    </div>
  );
}

export default App;