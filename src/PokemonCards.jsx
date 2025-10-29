import "./PokemonCards.css";
import { useNavigate } from "react-router-dom";

const PokemonCards = ({ pokemonData }) => {
    const navigate = useNavigate();

    const handleKnowMore = () => {
        navigate(`/pokemon/${pokemonData.name}`, { state: { pokemonData } });
    };

    return (
        <div className="cards">
            <div className="pokemon-card">
                <figure>
                    <img
                        src={pokemonData.sprites?.other?.dream_world?.front_default}
                        alt={pokemonData.name}
                    />
                </figure>

                <h2 className="pokemon-name">{pokemonData.name}</h2>

                <div className="pokemon-info pokemon-highlight">
                    <p>{pokemonData.types.map((curType) => curType.type.name).join(", ")}</p>
                </div>

                {/* Know More Button */}
                
                {/* ----------------- Event Handle --------------- */}
                <button className="know-more-btn" onClick={handleKnowMore}>
                    Know More
                </button>
            </div>
        </div>
    );
};

export default PokemonCards;
