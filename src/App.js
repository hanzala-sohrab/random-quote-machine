import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [quote, setQuote] = useState('');
  useEffect(() => {
    getQuotes();
  }, []);
  const getQuotes = async () => {
    const response = await fetch('https://type.fit/api/quotes');
    const data = await response.json();
    const randomQuote = data[Math.floor(Math.random() * data.length)];
    randomQuote.text = randomQuote.text.substring(0, randomQuote.text.length - 1);
    setQuote(randomQuote);
  };
  return (
    <div className="App">
      <div className="App-header" id="quote-box">
        <h4 id="text">{quote.text}</h4>
        <p id="author">- {quote.author}</p>
        <button id="new-quote">New quote</button>
        <a
          id="tweet-quote"
          className="App-link"
          href={`https://www.twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.text} - ${quote.author}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Tweet
        </a>
      </div>
    </div>
  );
}

export default App;
