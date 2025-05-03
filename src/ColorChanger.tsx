import { useState } from 'react';

const colors = {
  red: '#e74c3c',
  green: '#0ff34c',
  yellow: '#f1c40f',
};

const ColorChanger = () => {
  const [backgroundColor, setBackgroundColor] = useState(colors.red);

  const handleMakeRed = () => {
    setBackgroundColor(colors.red);
  };
  const handleMakeGreen = () => {
    setBackgroundColor(colors.green);
  };
  const handleMakeYellow = () => {
    setBackgroundColor(colors.yellow);
  };

  return (
    <>
      <h1 style={{ backgroundColor }}>Playwright capabilities</h1>
      <span style={{ color: backgroundColor }}>
        Current color: {backgroundColor}
      </span>
      <div className="btn-group-colors">
        <button
          style={{ backgroundColor: colors.red, padding: 12 }}
          onClick={handleMakeRed}
        >
          Red
        </button>
        <button
          style={{ backgroundColor: colors.green, padding: 12 }}
          onClick={handleMakeGreen}
        >
          Green
        </button>
        <button
          style={{ backgroundColor: colors.yellow, padding: 12 }}
          onClick={handleMakeYellow}
        >
          Yellow
        </button>
      </div>
    </>
  );
};

export default ColorChanger;
