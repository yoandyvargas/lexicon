import Header from "./Components/Header";
import SearchForm from "./Components/SearchForm";
import Results from "./Components/Results";
import SuggestionsBlock from "./Components/SuggestionsBlock";
import History from "./Components/History";
import { useState } from "react";
import styles from "./Styles/App.module.scss";
const Owlbot = require("owlbot-js");
const client = Owlbot("cc79e2f4add1dac1bdd8949cbfb560bd3bc12ba5");

function App() {
  const initialState = {
    definitions: [
      {
        type: "noun",
        definition:
          "the vocabulary of a person, language, or branch of knowledge.",
        example: "The size of the English lexicon",
        image_url: null,
        emoji: null,
      },
    ],
    pronunciation: "ˈleksiˌkän",
    word: "lexicon",
  };

  const [currentWord, setWord] = useState(initialState);

  const fetchWordData = (value) => {
    client
      .define(value)
      .then((res) => {
        setWord(res);
      })
      .catch((err) => {
        setWord({
          word: `${value}`,
          pronunciation: "Word not found.",
        });
      });
  };

  return (
    <div className={styles.app}>
      <Header />
      <SearchForm fetchWordData={fetchWordData} />
      <Results
        word={currentWord.word}
        pronunciation={currentWord.pronunciation}
        definitions={currentWord.definitions}
      />
      <SuggestionsBlock fetchWordData={fetchWordData} />
      <History
        SearchedWords={
          currentWord.pronunciation !== "Word not found."
            ? currentWord.word
            : "error"
        }
        fetchWordData={fetchWordData}
      />
      <footer>
        <p>Made by Yoandy Vargas 👨🏻‍💻</p>
      </footer>
    </div>
  );
}

export default App;
