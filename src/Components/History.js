import { useState, useEffect } from 'react'
import styles from '../Styles/History.module.scss'

export default function History ({ SearchedWords, fetchWordData }) {

  const [searchHistory, setHistory] = useState([]);
  const [isLoading, setLoading] = useState(true)

  //adds recently searched items into a searchHistory state array
  useEffect(() => {
    //there has to be a better way to write chained if statements
    if (!searchHistory.includes(SearchedWords) // adds words just once
    && SearchedWords !== 'lexicon' // default fetched word
    && SearchedWords !== undefined // 
    && SearchedWords !== 'error') // words not found
    {
      setHistory([...searchHistory, SearchedWords])
      setLoading(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [SearchedWords])

  return (
    <div className={styles.history}>
      {(isLoading ? <h2>Search History</h2> : 
      (searchHistory.map((item, index) => {
        return <p key={index} onClick={() => fetchWordData(`${item}`)}>{item}</p>
      })
      ))}
    </div>
  )
}