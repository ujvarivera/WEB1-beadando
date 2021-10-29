export default function Input({ foodName, handleChange, search, url }) {
  return (
    <div>
      <h1> Search for a meal: </h1>
      <input
        value={foodName}
        onChange={handleChange}
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            search(url);
          }
        }}
      />
      <button onClick={() => search(url)}>SEARCH</button>
    </div>
  );
}
