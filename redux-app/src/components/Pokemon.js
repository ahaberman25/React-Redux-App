import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPokemon } from "../actions";

const Pokemon = ({ isFetching, getPokemon, error, pokemon }) => {

  useEffect(() => {
    getPokemon(pokemon);
  }, [getPokemon]);

  console.log('pokemon value', pokemon);
  const arrPokemon = pokemon.results;
  console.log('arr value', arrPokemon);
  const next = pokemon.next;
  console.log('next', next);
  const prev = pokemon.prev;
  console.log('prev', prev);

  return (
    <div>
      {isFetching ? (
        <h2> Fetching Data: Please Wait... </h2>
      ) : (
        <div>
            <h2>
                {arrPokemon ? arrPokemon.map((item) => (
                    `${item.name} | `
                )):(
                    'waiting'
                )}
            </h2>
            {prev ? <button className='prev'>Prev</button>
            :(
                null
            )}
            {next ? <button className='next' ahref={next}>Next</button> 
            :(
                null
            )}
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
