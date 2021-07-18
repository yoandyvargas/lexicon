import SearchForm from './Components/SearchForm'
import Results from './Components/Results'
import SuggestionsBlock from './Components/SuggestionsBlock'
import { useState, useEffect } from 'react'
import styles from './Styles/App.module.scss'
import './Styles/Variables.module.scss'
const Owlbot = require('owlbot-js');
const client = Owlbot("cc79e2f4add1dac1bdd8949cbfb560bd3bc12ba5");

function App() {
  //create a set of themes and maybe randomly pick one on load and add a theme picker
  //look into react transition
  //find or create a list of more unique words for the "fancy" generator. There are 12 words, minimum req 240 variations. Verify they are on owlbot as well.

  const [currentWord, setWord] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const fetchWordData = value => {
    client.define(value)
      .then((res) => { setWord(res)})
      .then(setIsLoading(false));
  }

  useEffect(() => {
    fetchWordData('lexicon')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={styles.container}>
      {isLoading ? <h2>Loading...</h2> : ( <Results word={currentWord.word} pronunciation={currentWord.pronunciation} definitions={currentWord.definitions} /> )}
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
