import React, { useEffect, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { getPokemon } from "../actions";

const Pokemon = ({ isFetching, getPokemon, error, pokemon }) => {
  const [sprite, setSprite] = useState([]);

  useEffect(() => {
    getPokemon();
  }, []);

  useEffect(() => {
    if (pokemon.results) {
      axios
        .all(pokemon.results.map((link) => axios.get(link.url)))
        .then((res) => {
          console.log("moreinfo", res);
          setSprite(res);
        });
    }
  }, [pokemon]);

  console.log("sprite state", sprite);

  //   console.log('pokemon value', pokemon);
  const next = pokemon.next;
  //   console.log('next', next);
  const prev = pokemon.previous;
  console.log("prev", prev);

  return (
    <div>
      {isFetching ? (
        <h2> Fetching Data: Please Wait... </h2>
      ) : (
        <div className="pokemon-container">
          {sprite.map((item) => (
            <div className="sprite-container" key={item.data.name}>
              <h2>{item.data.name}</h2>
              <img src={item.data.sprites.front_default} alt={item.data.name} />
            </div>
          ))}
          {prev ? (
            <button className="prev" onClick={() => getPokemon(prev)}>
              Prev
            </button>
          ) : null}
          {next ? (
            <button className="next" onClick={() => getPokemon(next)}>
              Next
            </button>
          ) : null}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    pokemon: state.pokemon,
    isFetching: state.isFetching,
    error: state.error,
  };
};
export default connect(mapStateToProps, { getPokemon })(Pokemon);
