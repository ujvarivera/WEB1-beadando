import { useState } from "react";

export default function Meal({ image, name, data }) {
  const [favourites, setFavourites] = useState([]);

  function like() {
    setFavourites([...favourites, data]);
  }

  return (
    <div>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <h2>
        <a href={data.strYoutube}>You can watch a video how to make it</a>
      </h2>
      <h2>
        <button onClick={like}>Like</button>
      </h2>
    </div>
  );
}
