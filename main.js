document.getElementById("showPokemon").addEventListener("click", () => {
    const show = document.getElementById("show");
    const API_URL = "https://pokeapi.co/api/v2/pokemon/"



    async function getPokemon() {
        const ID = Math.floor(Math.random() * 898)
        const response = await fetch(`${API_URL}${ID}`)
        const data = await response.json();
        return data;
    };
    const hola = getPokemon();
    console.log(hola);

    async function setPokemon() {
        const info = await getPokemon();
        show.src = info.sprites.front_default
    }

    setPokemon();
});