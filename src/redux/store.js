import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from 'redux-thunk';
import modalReducer from "./modal/reducer";
import movieReducer from "./movie/reducer";

const rootReducer = combineReducers({
    movieReducer,
    modalReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

window.store = store;

export default store;