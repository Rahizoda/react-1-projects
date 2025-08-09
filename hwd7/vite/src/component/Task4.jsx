import React, { useState } from 'react';

function Task4() {
  const [text, setText] = useState('');

  return (
    <div style={{ textAlign: 'center', padding: '30px' }}>
      <h2>💬 Шуморакунаки ҳарфҳо</h2>

      <textarea
        rows="5"
        cols="40"
        placeholder="Матни худро ворид намо..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>

      <p>Шумораи ҳарфҳо: {text.length}</p>
    </div>
  );
}

export default Task4;
