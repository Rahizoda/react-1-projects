import React, { useState } from 'react';

const questions = [
  {
    question: "Пойтахти Тоҷикистон чист?",
    options: ["Хуҷанд", "Кӯлоб", "Душанбе", "Бохтар"],
    answer: "Душанбе"
  },
  {
    question: "2 + 2 чанд мешавад?",
    options: ["3", "4", "5", "6"],
    answer: "4"
  },
  {
    question: "Ранги парчами Тоҷикистон кадомҳоянд?",
    options: ["Сурх, сафед, сабз", "Сурх, кабуд, зард", "Сиёҳ, сафед, сурх", "Зард, кабуд, сабз"],
    answer: "Сурх, сафед, сабз"
  }
];

function Task3() {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState('');
  const [showResult, setShowResult] = useState(false);

  const handleOptionClick = (option) => {
    setSelected(option);
    setShowResult(true);
  };

  const handleNext = () => {
    setCurrentQ(prev => prev + 1);
    setSelected('');
    setShowResult(false);
  };

  const current = questions[currentQ];

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
      <h2>Савол {currentQ + 1} аз {questions.length}</h2>
      <p><strong>{current.question}</strong></p>

      {current.options.map((option, idx) => (
        <button
          key={idx}
          onClick={() => handleOptionClick(option)}
          style={{
            display: "block",
            margin: "10px 0",
            padding: "10px",
            backgroundColor: selected === option
              ? (option === current.answer ? "lightgreen" : "salmon")
              : "white"
          }}
          disabled={showResult}
        >
          {option}
        </button>
      ))}

      {showResult && (
        <p>
          {selected === current.answer
            ? "✅ Ҷавоби дуруст!"
            : `❌ Нодуруст! Ҷавоби дуруст: ${current.answer}`}
        </p>
      )}

      {currentQ < questions.length - 1 ? (
        <button onClick={handleNext} disabled={!showResult}>
          👉 Саволи навбатӣ
        </button>
      ) : (
        showResult && <p>🎉 Тест ба охир расид!</p>
      )}
    </div>
  );
}

export default Task3;
