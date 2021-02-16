import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { loadState } from "../tools/localStorage";
import rootReducer from "./reducers";

export const storeCreate = async () => {
    let state = await loadState();
    return createStore(rootReducer, state, applyMiddleware(thunk));

};
