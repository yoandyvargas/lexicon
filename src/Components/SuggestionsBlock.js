import { useState, useEffect } from 'react'
import Anime from 'react-anime'
import styles from '../Styles/SuggestionsBlock.module.scss'
const wordList = require('../Data/suggestions.json')
//maybe find a more interesting set of words to import later.
export default function SuggestionsBlock({ fetchWordData }) {

  const [wordBlock, setWordBlock] = useState([]);

  let suggestWords = Object.keys(wordList)
  let updateArray = []

  const suggestionsData = () => {
    for (let i = 0; i < 12; i++) {
      updateArray.push(suggestWords[Math.floor(Math.random() * 3000)])
    }
    setWordBlock(updateArray)
  }

  useEffect(() => {
    suggestionsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  let animeProps = {
    opacity: [0, 1],
    translateY: [-64, 0],
    delay: (el, index) => index * 100
  };

  return (
    <section>
      <div className={styles.section__header}>
        <h2>Fancy words</h2>
        <button onClick={suggestionsData}>🔄</button>
      </div>
      <div className={styles.grid}>
        <Anime {...animeProps}>
          {
            wordBlock.map((item, index) => {
              return (
                <button key={index} onClick={() => fetchWordData(`${item}`)}>{item}</button>
              )
            })
          }
        </Anime>
      </div>
    </section>
  )
}