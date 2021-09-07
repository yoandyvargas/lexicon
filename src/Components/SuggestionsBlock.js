import { useState, useEffect } from "react";
import Anime from "react-anime";
import styles from "../Styles/SuggestionsBlock.module.scss";
const suggestions = require("../Data/suggestions.json");
export default function SuggestionsBlock({ fetchWordData }) {
  const [wordBlock, setWordBlock] = useState([]);

  //suggestions.json contains 133 keys with empty objects as values
  let suggestWords = Object.keys(suggestions);

  //Creates a randomized array of 12 suggested words from suggestions.json
  const suggestionsData = () => {
    let updateArray = [];
    while (updateArray.length < 12) {
      let index = Math.floor(Math.random() * 132);
      if (!updateArray.includes(suggestWords[index])) {
        updateArray.push(suggestWords[index]);
      }
    }
    setWordBlock(updateArray);
  };

  useEffect(() => {
    suggestionsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let animeProps = {
    opacity: [0, 1],
    translateY: [-64, 0],
    delay: (el, index) => index * 100,
  };

  return (
    <section>
      <div className={styles.suggestions__info}>
        <h2>Suggested words</h2>
        <button onClick={suggestionsData}>Shuffle</button>
      </div>
      <div className={styles.suggestions__grid}>
        <Anime {...animeProps}>
          {wordBlock.map((item) => (
            <button key={item} onClick={() => fetchWordData(`${item}`)}>
              {item}
            </button>
          ))}
        </Anime>
      </div>
    </section>
  );
}
