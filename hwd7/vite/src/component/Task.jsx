import React, { useState } from 'react';

function Task() {
  const [visible, setVisible] = useState(false);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>🔓 Пароли намоён/пинҳон</h2>

      <input
        type={visible ? 'text' : 'password'}
        placeholder="Пароли худро ворид кунед"
        style={{ padding: '10px', fontSize: '16px' }}
      />

      <br /><br />

      <button
        onClick={() => setVisible(!visible)}
        style={{
          padding: '8px 20px',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          borderRadius: '5px'
        }}
      >
        {visible ? '🙈 Пинҳон кардан' : '👁 Нишон додан'}
      </button>
    </div>
  );
}

export default Task;
