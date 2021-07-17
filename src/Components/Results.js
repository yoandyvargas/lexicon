import styles from '../Styles/Results.module.scss'

export default function Results({ word, pronunciation, definitions }) {
  //need to add conditionals for image_url and emoji

  console.log(definitions)

  return (
    <div className={styles.container}>
      <h3>{word}</h3>
      <hr></hr>
      <p>{pronunciation}</p>
    </div>
  )
}