// components/ThemeToggle.js
import { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggle = () => {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <button onClick={() => setDark(!dark)} className="text-white text-xl">
      {dark ? <FiSun /> : <FiMoon />}
    </button>
  );
};

export default ThemeToggle;
