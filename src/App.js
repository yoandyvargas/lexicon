import SearchForm from './Components/SearchForm'
import Results from './Components/Results'
import SuggestionsBlock from './Components/SuggestionsBlock'
import { useState } from 'react'
import styles from './Styles/App.module.scss'
const Owlbot = require('owlbot-js');
const client = Owlbot("cc79e2f4add1dac1bdd8949cbfb560bd3bc12ba5");

function App() {
  //results section that displays word, pronunciation, etc
  //keep a history of previously searched words.
  //create a set of themes and maybe randomly pick one on load and add a theme picker
  //look into react transition

  const [currentWord, setWord] = useState({ "word": "", "pronunciation": "", "definitions": "" })

  const fetchWordData = value => {
    console.log(value)
    client.define(value)
      .then((res) => {
        setWord(res)
      })
  }

  return (
    <div className={styles.container}>
      <h1>Lexicon</h1>
      <Results
        word={currentWord.word}
        pronunciation={currentWord.pronunciation}
      />
      <SearchForm
        fetchWordData={fetchWordData}
      />
      <SuggestionsBlock
        fetchWordData={fetchWordData}
      />
    </div>
  );
}

export default App;
