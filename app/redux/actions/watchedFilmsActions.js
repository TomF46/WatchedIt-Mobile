import * as types from "./actionTypes";
import { AllFilmsData } from '../../data/filmData'

export function addWatchedFilmSuccess(film) {
    return { type: types.ADD_WATCHED_FILM, film }
}

export function removeWatchedFilmSuccess(film) {
    return { type: types.REMOVE_WATCHED_FILM, film }
}

export function addWatchedFilm(id) {
    return function (dispatch) {
        const selectedFilm = AllFilmsData.find(film => film.id === id);
        if (selectedFilm == null) throw err;
        dispatch(addWatchedFilmSuccess(selectedFilm));
    }
}

export function removeWatchedFilm(id) {
    return function (dispatch) {
        const selectedFilm = AllFilmsData.find(film => film.id === id);
        if (selectedFilm == null) throw err;
        dispatch(removeWatchedFilmSuccess(selectedFilm));
    }
}