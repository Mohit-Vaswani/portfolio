"use client"

import { useState } from 'react';

const DarkModeSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
    // Add logic here to toggle dark mode on/off
  };

  return (
    <div
      className={`w-14 h-8 bg-gray-300 rounded-full flex items-center cursor-pointer p-1 ${
        isDarkMode ? 'justify-end bg-gray-600' : 'justify-start'
      }`}
      onClick={handleToggle}
    >
      <div
        className={`w-6 h-6 bg-white rounded-full shadow-md transform ${
          isDarkMode ? 'translate-x-6' : 'translate-x-1'
        } transition-transform duration-300`}
      ></div>
    </div>
  );
};

export default DarkModeSwitch;
