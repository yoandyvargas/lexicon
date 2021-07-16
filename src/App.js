import './App.css';
import SearchForm from './Components/SearchForm'
const Owlbot = require('owlbot-js');
const client = Owlbot("cc79e2f4add1dac1bdd8949cbfb560bd3bc12ba5");

client.define('owl').then(function (result) {
  console.log(result);
});

function App() {
  //search form with autocomplete
  //random suggest word bubbles that are clickable to define
  //results section that displays word, pronunciation, etc
  //
  const fetchWordData = value => {
    client.define(value)
      .then((res) => {
        console.log(res)
      })
  }

  return (
    <div className="App">
      <SearchForm fetchWordData={fetchWordData} />
    </div>
  );
}

export default App;
