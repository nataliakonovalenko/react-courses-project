import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import modal from "./modal/reducer";
import movie from "./movie/reducer";

const rootReducer = combineReducers({
    movie,
    modal
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;