import React, { useState } from 'react';
import { translateSarcasm } from './Output';

function TranslatorApp() {
  const [userInput, setUserInput] = useState('');
  const [translated, setTranslated] = useState('');

  const handleTranslate = () => {
    setTranslated(translateSarcasm(userInput.trim()));
  };

  return (
    <div style={{
      padding: '40px',
      fontFamily: 'sans-serif',
      textAlign: 'center',
      background: 'linear-gradient(to right, #fce4ec, #ede7f6)',
      minHeight: '100vh',
    }}>
      <h2 style={{ color: '#6a1b9a' }}>🌀 Sarcasm Translator</h2>
      <input
        type="text"
        value={userInput}
        onChange={e => setUserInput(e.target.value)}
        placeholder="Type something innocent..."
        style={{
          padding: '12px', width: '70%', borderRadius: '8px',
          border: '2px solid #6a1b9a', marginBottom: '20px', fontSize: '1rem',
        }}
      />
      <br />
      <button
        onClick={handleTranslate}
        style={{
          padding: '10px 20px', backgroundColor: '#6a1b9a', color: '#fff',
          border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '1rem'
        }}
      >
        Translate ✨
      </button>

      {translated && (
        <div style={{
          marginTop: '30px', padding: '20px', background: '#fff',
          borderRadius: '12px', boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
          color: '#4a148c', fontSize: '1.1rem',
        }}>
          <p>{translated}</p>
        </div>
      )}
    </div>
  );
}

export default TranslatorApp;