import React, { useState } from 'react';

const App = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(prev => !prev);
  };

  return (
    <div>
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter your password"
      />
      <button onClick={togglePassword}>
        {showPassword ? "Hide" : "Show"}
      </button>
    </div>
  );
};

export default App;
