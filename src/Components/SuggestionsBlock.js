import { useState, useEffect } from 'react'
const wordList = require('../Data/suggestions.json')
//maybe find a more interesting set of words to import later.
export default function SuggestionsBlock() {

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
  }, [])

  return (
    <div>
      {
        wordBlock.map((item, index) => {
          return (
            <button key={index}>{item}</button>
          )
        })
      }
      <button onClick={suggestionsData}>New Set of Words</button>
    </div>
  )
}