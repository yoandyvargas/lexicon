import { useState } from 'react'
import { Hint } from 'react-autocomplete-hint'
const suggestions = require('../Data/suggestions.json')

export default function SearchForm({ fetchWordData }) {

  const [value, setValue] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    if (!value) return;
    fetchWordData(value)
  }

  let autocompleteOptions = Object.keys(suggestions)

  return (
    <form onSubmit={handleSubmit}>
      <Hint options={autocompleteOptions} allowTabFill='true'>
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