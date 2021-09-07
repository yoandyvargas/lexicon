import { useState, useEffect } from "react";
import styles from "../Styles/History.module.scss";

export default function History({ SearchedWords, fetchWordData }) {
  const [searchHistory, setHistory] = useState(() => {
    const localSearchHistory = localStorage.getItem("words");
    return localSearchHistory ? JSON.parse(localSearchHistory) : [];
  });

  // Excludes unncessary items -> Updates state -> Adds to local storage -> Repeats every time a new word is fetched
  useEffect(() => {
    if (
      !searchHistory.includes(SearchedWords) &&
      SearchedWords !== "lexicon" &&
      SearchedWords !== undefined &&
      SearchedWords !== "error"
    ) {
      setHistory([...searchHistory, SearchedWords]);
      localStorage.setItem("words", JSON.stringify(searchHistory));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [SearchedWords]);

  return (
    <section>
      <div className={styles.history}>
        <h2>Search History</h2>
        {searchHistory.map((item, index) => {
          return (
            <p key={index} onClick={() => fetchWordData(`${item}`)}>
              {item}
            </p>
          );
        })}
      </div>
    </section>
  );
}
