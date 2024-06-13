import { useState } from 'react';
import './App.css';

const framework = 'Playwright';
function App() {
  const [backgroundColor, setBackgroundColor] = useState('#e74c3c');

  const handleMakeRed = () => {
    setBackgroundColor('#e74c3c');
  };
  const handleMakeGreen = () => {
    setBackgroundColor('#0ff34c');
  };
  const handleMakeYellow = () => {
    setBackgroundColor('#f1c40f');
  };

  return (
    <>
      <h1 style={{ backgroundColor }}>{framework} capabilities</h1>
      <span>Current color: {backgroundColor}</span>
      <div className="btn-group-colors">
        <button onClick={handleMakeRed}>Red</button>
        <button onClick={handleMakeGreen}>Green</button>
        <button onClick={handleMakeYellow}>Yellow</button>
      </div>
    </>
  );
}

export default App;
