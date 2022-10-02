import "./App.css";
import quotes from "./quotes.json";
import React, { useState, useEffect } from "react";

function App() {
  const [quote, setQuote] = useState("");
  useEffect(() => {
    getQuotes();
  }, []);
  const getQuotes = async () => {
    // const response = await fetch('https://type.fit/api/quotes');
    // const data = await response.json();
    // const randomQuote = data[Math.floor(Math.random() * data.length)];
    // randomQuote.text = randomQuote.text.substring(0, randomQuote.text.length - 1);
    // setQuote(randomQuote);
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    randomQuote.text = randomQuote.text.substring(
      0,
      randomQuote.text.length - 1
    );
    setQuote(randomQuote);
  };
  return (
    <div className="App">
      <div id="quote-box">
        <h4 id="text">{quote.text}</h4>
        <h6 id="author">{quote.author}</h6>
        <div className="clickable">
          <a
            id="tweet-quote"
            className="App-link"
            href={`https://www.twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.text} - ${quote.author}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
          <button id="new-quote" onClick={getQuotes}>
            New quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
