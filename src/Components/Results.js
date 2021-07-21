import styles from '../Styles/Results.module.scss'

export default function Results({ word, pronunciation, definitions }) {

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
              <li><p>{item.definition}</p></li>
              {item.example &&
              <li>
                <strong>Example: &nbsp;</strong>
                <p dangerouslySetInnerHTML={{__html: item.example}}></p>
              </li>
              } 
            </ul>
            {item.image_url && <img src={item.image_url} alt='describes use of definition' />}
          </div>
        )
        })
      }
    </div>
  )

}