import { useState, useEffect } from 'react'
import styles from '../Styles/History.module.scss'

export default function History({ addWord }) {

  const [history, setHistory] = useState([])
  
  useEffect(() => {
    setHistory([...history, addWord])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addWord])

  return (
    <div className={styles.history}>
      <div className={styles.history__content}>
        <ul>
          {history.map((word, index) => {
            return <li key={index}>{word}</li>
          })}
        </ul>
    </div>
  </div>
  )

}