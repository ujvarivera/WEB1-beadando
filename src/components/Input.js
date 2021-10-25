export default function Input(props) {
  return (
    <div>
      <h1> Search for a meal: </h1>
      <input
        value={props.foodName}
        onChange={props.handleChange}
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            props.search(props.url);
          }
        }}
      />
      <button onClick={() => props.search(props.url)}>SEARCH</button>
    </div>
  );
}
