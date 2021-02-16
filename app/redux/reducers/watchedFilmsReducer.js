import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function watchedFilmsReducer(state = initialState.watchedFilms, action) {
    switch (action.type) {
        case types.ADD_WATCHED_FILM:
            return [...state, { ...action.film }];
        case types.REMOVE_WATCHED_FILM:
            return state.filter((film) => film.id != action.film.id);
        default:
            return state;
    }
}
