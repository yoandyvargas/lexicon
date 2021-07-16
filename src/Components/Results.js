export default function Results({ word, pronunciation }) {
  //need to add conditionals for image_url and emoji

  return (
    <div>
      <h3>{word}</h3>
      <p>{pronunciation}</p>
    </div>
  )
}