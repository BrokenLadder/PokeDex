const search = (event) => {
    event.preventDefault();
    const pokenumber = document.getElementById("pokenumber").value;
    const baseURL = "https://pokeapi.co/api/v2/pokemon/";
    $.get(baseURL + pokenumber, (pokemon) => {
      console.log(pokemon);
      document.getElementById("pokename").innerHTML = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
      document.getElementById("pokeimage").src = pokemon.sprites.front_default;
      document.getElementById("height").innerHTML = "Height: " + (pokemon.height * .1).toPrecision(2) + " Meters";
      document.getElementById("speed").innerHTML = "Speed: " + pokemon.stats[0].base_stat;
      document.getElementById("specialDefense").innerHTML = "Special Defense: " + pokemon.stats[1].base_stat;
      document.getElementById("specialAttack").innerHTML = "Special Attack: " + pokemon.stats[2].base_stat;
      document.getElementById("defense").innerHTML = "Defense: " + pokemon.stats[3].base_stat;
      document.getElementById("attack").innerHTML = "Attack: " + pokemon.stats[4].base_stat;
      document.getElementById("hp").innerHTML = "HP: " + pokemon.stats[5].base_stat;
    });
  }
  document.getElementById("pokeform").addEventListener('submit', search);
