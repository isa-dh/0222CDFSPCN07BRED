function Card(props) {
  return (
    <div className="card__container">
      <div className="card__infos">
        <h2>{props.name}</h2>
      </div>
      <img src={props.imageUrl} alt={props.name} />
    </div>
  );
}

export { Card };
