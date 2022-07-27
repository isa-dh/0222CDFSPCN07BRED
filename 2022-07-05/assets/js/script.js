async function find() {
  const inputText = document.querySelector("input").value.toLowerCase();
  const baseUrl = `https://pokeapi.co/api/v2/pokemon/${inputText}`;
  let pokemonInfo;
  let errorMsg;

  await axios
    .get(baseUrl)
    .then((response) => {
      pokemonInfo = response.data;
      errorMsg = false;
    })
    .catch((error) => {
      console.log(pokemonInfo);
      errorMsg = true;
    });

  //   Usando fetch API
  //   await fetch(baseUrl)
  //     .then((response) => response.json())
  //     .then((json) => (pokemonInfo = json))
  //     .catch((error) => console.log(error));

  // Elemento pai/mãe
  const renderArea = document.getElementById("renderArea");

  const pokemonExists = document.getElementById("pokemon");

  if (pokemonExists) {
    renderArea.removeChild(pokemonExists);
  }

  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonInfo.id}.png`;

  // quando o input é vazio
  // quando o pokemon não é encontrado

  if (pokemonInfo != undefined && pokemonInfo.name != undefined) {
    renderArea.insertAdjacentHTML(
      "beforeend",
      `
        <div id="pokemon">
            <h2>${pokemonInfo.name}</h2>
            <img
              src="${imageUrl}"
              alt="${pokemonInfo.name}"
            />
        </div>
      `
    );
  }
}
