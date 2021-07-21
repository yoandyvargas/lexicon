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
  //Ask people why React Anime is not re rendering and stop wasting time on this.
  //find or create a list of more unique words for the "fancy" generator. There are 12 words, minimum req 240 variations. Verify they are on owlbot as well. Priority 2
  //look into scroll bar fix? Priority 3

  const [currentWord, setWord] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const colorOptions = ['green', 'red', 'blue', 'yellow']

  const fetchWordData = value => {
    client.define(value)
      .then((res) => { setWord(res)})
      .then(setIsLoading(false));
  }

  const randomizeTheme = color => {
    document.body.style.setProperty('--main-button-color', color)
  }

  useEffect(() => {
    fetchWordData('lexicon')
    //randomizeTheme(colorOptions[Math.floor(Math.random() * 4)])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={styles.container}>
      <Header />
      <SearchForm
        fetchWordData={fetchWordData}
      />
      {isLoading ? <h2>Loading...</h2> : ( <Results word={currentWord.word} pronunciation={currentWord.pronunciation} definitions={currentWord.definitions} /> )}
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
