export default function Meal(props) {
    return (
      <div>
        <img src={props.image} alt={props.name} />
        <h2>{props.name}</h2>
        <h3>Click here for more details...</h3>
      </div>
    );
  }
  