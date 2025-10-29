import { useLocation, useNavigate } from "react-router-dom";
import "./PokemonCards.css";
import "./PokemonDetails.css"

const PokemonDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pokemon = location.state?.pokemonData;

  if (!pokemon) {
    return <h2>No Pokémon data found.</h2>;
  }

  return (
    <div className="pokemon-details">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ⬅ Back
      </button>

      <figure>
        <img
          src={pokemon.sprites?.other?.dream_world?.front_default}
          alt={pokemon.name}
        />
      </figure>

      <h1 className="pokemon-name">{pokemon.name}</h1>

      <div className="pokemon-stats">
        <p><strong>Type:</strong> {pokemon.types.map(t => t.type.name).join(", ")}</p>
        <p><strong>Height:</strong> {pokemon.height}</p>
        <p><strong>Weight:</strong> {pokemon.weight}</p>
        <p><strong>Speed:</strong> {pokemon.stats[5].base_stat}</p>
        <p><strong>Experience:</strong> {pokemon.base_experience}</p>
        <p><strong>Attack:</strong> {pokemon.stats[1].base_stat}</p>
        <p><strong>Abilities:</strong> {pokemon.abilities.map(a => a.ability.name).join(", ")}</p>
      </div>
    </div>
  );
};

export default PokemonDetails;

