import React, { useState } from 'react';
import './WordLetterCounter.css'; // Assuming you have a CSS file for styling

function WordLetterCounter() {
  const [text, setText] = useState("");
  const wordCount = text.split(/\s+/).filter(Boolean).length;
  const characterCount = text.length;

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="word-counter"> {/* Add class for styling */}
      <textarea
        placeholder="Type your text here..."
        onChange={handleTextChange}
        value={text}
        rows={5}
        cols={50}
      />
      <p>Word Count: {wordCount}</p>
      <p>Character Count: {characterCount}</p>
    </div>
  );
}

export default WordLetterCounter;
