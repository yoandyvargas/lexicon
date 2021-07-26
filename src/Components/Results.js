import styles from '../Styles/Results.module.scss'
import Anime from 'react-anime'

export default function Results({ word, pronunciation, definitions }) {

  let animeProps = {
    opacity: [0, 1],
    translateY: [-64, 0],
    delay: (el, index) => index * 100
  };

  return (
    <div className={styles.results}>
      <Anime {...animeProps}>
      <h2>{word}</h2>
      <h3>{pronunciation}</h3>
      <div className={styles.divider}></div>
      {
        definitions && definitions.map((item) => {
        return (
          <div key={item} className={styles.results__info}>
            <ul>
              <li><em>{item.type}</em></li>
              <li>{item.definition}</li>
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
      </Anime>
    </div>
  )

}