import Header from './Components/Header'
import SearchForm from './Components/SearchForm'
import Results from './Components/Results'
import SuggestionsBlock from './Components/SuggestionsBlock'
import History from './Components/History'
import { useState, useEffect } from 'react'
import styles from './Styles/App.module.scss'
const Owlbot = require('owlbot-js');
const client = Owlbot("cc79e2f4add1dac1bdd8949cbfb560bd3bc12ba5");

function App() {

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
    <div className={styles.app}>
      <Header />
      <SearchForm
        fetchWordData={fetchWordData}
      />
      {isLoading ? <h1>Loading...</h1> : ( <Results word={currentWord.word} pronunciation={currentWord.pronunciation} definitions={currentWord.definitions} /> )}
      <SuggestionsBlock
        fetchWordData={fetchWordData}
      />
      <History 
      SearchedWords={currentWord.word}
      fetchWordData={fetchWordData}
      />
      <footer>
        <p>Made by Andrew Hendricks 👨🏻‍💻</p>
      </footer>
    </div>
  );
}

export default App;
