import './style.css';

function Card(props) {
  return (
    <div className="card">
      <h2>{props.nome}</h2>
      <h2>{props.tipo}</h2>
      <img src={props.imagem} alt={props.nome} />
    </div>
  );
}

export { Card };
