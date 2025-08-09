import React, { useState } from 'react';

const quotes = [
  "Бе заҳмат не мерасад неъмат.",
  "Ҳар кӣ шаб бедор, ӯст соҳибдил.",
  "Зи кӯи дӯст бӯи дӯст ояд.",
  "Чу туро ранҷи дигарон бошад ранҷ...",
  "Зиндагӣ ҷорист — набояд бохт!"
];

function Task6() {
  const [quote, setQuote] = useState(quotes[0]);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div style={{
      textAlign: 'center',
      padding: '50px',
      fontFamily: 'sans-serif'
    }}>
      <h2>🎯 Генератори иқтибосҳо</h2>

      <blockquote
        style={{
          fontSize: '20px',
          fontStyle: 'italic',
          backgroundColor: '#f0f0f0',
          padding: '20px',
          borderRadius: '10px',
          marginBottom: '20px'
        }}
      >
        “{quote}”
      </blockquote>

      <button
        onClick={getRandomQuote}
        style={{
          padding: '10px 25px',
          fontSize: '16px',
          backgroundColor: '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '5px'
        }}
      >
        Иқтибоси нав
      </button>
    </div>
  );
}

export default Task6;
