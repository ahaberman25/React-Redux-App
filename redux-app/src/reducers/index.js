import { FETCHING_POKEMON_START,FETCHING_POKEMON_SUCCESS,FETCHING_POKEMON_FAILURE } from '../actions'

const initialState = {
    pokemon: '',
    isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_POKEMON_START:
            return {
                ...state,
                isFetching: true
            };
        case FETCHING_POKEMON_SUCCESS:
            return {
                ...state,
                pokemon: action.payload,
                isFetching: false
            }
        case FETCHING_POKEMON_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: 'Ash got lost in Pallet Town'
            }
        default: 
            return state;
    }
}