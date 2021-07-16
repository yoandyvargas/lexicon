import './App.css';
import SearchForm from './Components/SearchForm'
import Results from './Components/Results'
import SuggestionsBlock from './Components/SuggestionsBlock'
import { useState } from 'react'
const Owlbot = require('owlbot-js');
const client = Owlbot("cc79e2f4add1dac1bdd8949cbfb560bd3bc12ba5");

function App() {
  //random suggest word bubbles that are clickable to define
  //results section that displays word, pronunciation, etc
  //keep a history of previously searched words.

  const [currentWord, setWord] = useState({ "word": "", "pronunciation": "", "definitions": "" })

  const fetchWordData = value => {
    client.define(value)
      .then((res) => {
        setWord(res)
      })
  }

  return (
    <div className="App">
      <Results
        word={currentWord.word}
        pronunciation={currentWord.pronunciation}
      />
      <SearchForm fetchWordData={fetchWordData} />
      <SuggestionsBlock />
    </div>
  );
}

export default App;
