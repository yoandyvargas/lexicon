import styles from '../Styles/Results.module.scss'
import Anime from 'react-anime'

export default function Results({ word, pronunciation, definitions }) {

  let animeProps = {
    opacity: [0, 1],
    translateY: [-64, 0],
    delay: (el, index) => index * 100
  };

  return (
    <div className={styles.container}>
      <Anime {...animeProps}>
      <h2>{word}</h2>
      <h3>{pronunciation}</h3>
      <hr></hr>
      {
        definitions && definitions.map((item) => {
        return (
          <div className={styles.info}>
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
      </Anime>
    </div>
  )

}