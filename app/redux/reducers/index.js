import { combineReducers } from "redux";
import watchedFilms from "./watchedFilmsReducer";

const rootReducer = combineReducers({
    watchedFilms
});

export default rootReducer;
