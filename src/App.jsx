import { useState } from 'react';
import './App.css';
import logo from './assets/LogoUniq.png'; // Pastikan path untuk gambar benar

function App() {
  const [isHidden, setIsHidden] = useState(true);

  const toggleRectangle = () => {
    setIsHidden(!isHidden);
  };

  const handleFocus = (e) => {
    e.target.placeholder = ''; // Menghilangkan placeholder saat fokus
  };

  const handleBlur = (e) => {
    if (!e.target.value) {
      e.target.placeholder = 'Got Any Question'; // Menampilkan kembali placeholder jika tidak ada input
    }
  };

  return (
    <div className="faq-container">
      <div className="dropdown">
        <div className={`rectangle ${isHidden ? 'hidden' : ''}`}>
          <img src={logo} alt="Logo Uniq" className="logo" />
        </div>
        <div className="expand-arrow" onClick={toggleRectangle}>
          {isHidden ? '▼' : '▲'}
        </div>
      </div>
      <h1>Frequently Asked Questions</h1>
      <div className="gradient-border">
        <div className="search-container">
          <div className="search-icon">🔍</div>
          <input
            type="text"
            className="search-input"
            placeholder="Got Any Question"
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
