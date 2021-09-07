import { useEffect } from "react";
import styles from "../Styles/History.module.scss";
import useLocalStorage from "./useLocalStorage";

export default function History({ SearchedWords, fetchWordData }) {
  const [searchHistory, setHistory] = useLocalStorage("words", []);

  useEffect(() => {
    if (
      !searchHistory.includes(SearchedWords) &&
      SearchedWords !== "lexicon" &&
      SearchedWords !== undefined &&
      SearchedWords !== "error"
    ) {
      setHistory([...searchHistory, SearchedWords]);
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
