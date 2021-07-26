import { useState } from 'react'
import { Hint } from 'react-autocomplete-hint'
import styles from '../Styles/SearchForm.module.scss'
const hints = require('../Data/hints.json')

export default function SearchForm({ fetchWordData }) {

  const [value, setValue] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    if (!value) return;
    fetchWordData(value)
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Hint options={Object.keys(hints)} allowTabFill='true'>
        <input
          type='text'
          className='input'
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder='Search for a word..'
        />
      </Hint>
      <button type='submit'>👀</button>
    </form >
  )

}