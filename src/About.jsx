
import { Link } from "react-router-dom";
import "./About.css"

const About = () => {
  return (
    <div className="about-container">
      <h1>About Pokemon</h1>
      <p>
        Pokémon, short for <strong>“Pocket Monsters”</strong>, is a globally loved franchise created by
        Nintendo, Game Freak, and Creatures. It began as a video game series and
        soon expanded into <strong>TV shows, movies, cards, and mobile games</strong>.
      </p>

      <p>
        In the Pokémon world, trainers catch and train creatures called
        <strong> Pokémon</strong> to battle each other. Each Pokémon has unique
        abilities, powers, and types such as <em>Fire, Water, Grass, Electric, Psychic,</em> and more.
      </p>

      <p>
        The goal of a Pokémon Trainer is to explore different regions, catch
        Pokémon, and become a <strong>Pokémon Master!</strong>
      </p>

      <p>
        This web app uses the public <strong>PokéAPI</strong> to show details like a Pokémon’s name,
        type, abilities, stats, and images.
      </p>

      <Link to="/" className="back-home-btn">⬅ Back to Home</Link>
    </div>
  );
};

export default About;

