import axios from "axios";

export const FETCHING_POKEMON_START = "FETCHING_POKEMON_START";
export const FETCHING_POKEMON_SUCCESS = "FETCHING_POKEMON_SUCCESS";
export const FETCHING_POKEMON_FAILURE = "FETCHING_POKEMON_FAILURE";

export const getPokemon = (url) => (dispatch) => {
  dispatch({ type: FETCHING_POKEMON_START });
  const base_url = url ? url : 'https://pokeapi.co/api/v2/pokemon/'

  axios.get(base_url)
    .then(res => {
        console.log('fetch res', res);
        dispatch({ type: FETCHING_POKEMON_SUCCESS, payload: res.data });
    })
    .catch(err => {
        console.log(err);
        dispatch({ type: FETCHING_POKEMON_FAILURE, payload: 'Ash is Lost is Pallet City!'})
    })
};
