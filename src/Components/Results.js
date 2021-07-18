import styles from '../Styles/Results.module.scss'
import { useState } from 'react'

export default function Results({ word, pronunciation, definitions }) {
  //need to add conditionals for image_url and emoji

  return (
    <div className={styles.container}>
      <h2>{word}</h2>
      <h3>{pronunciation}</h3>
      <hr></hr>
      {
        definitions && definitions.map((item) => {
        return (
          <div>
            <ul>
              <li>{item.definition}</li>
              <li><strong>Example:</strong> {item.example}</li>
              <li>{item.image_url}</li>
            </ul>
          </div>
        )
        })
      }
    </div>
  )

}