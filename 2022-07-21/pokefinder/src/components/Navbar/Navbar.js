import { FaSearch } from 'react-icons/fa';

function Navbar(props) {
  return (
    <div className="navbar__container">
      <h1>Encontre Pokemons</h1>
      <form onSubmit={props.onSubmit}>
        <input type="text" placeholder="Digite o nome do pokemon" required />
        <button type="submit">
          <FaSearch />
        </button>
      </form>
    </div>
  );
}

export { Navbar };
