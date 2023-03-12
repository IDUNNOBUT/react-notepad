import {combineReducers, createStore} from "redux";
import themeReducer from "./themeReducer";
import notesReducer from "./notesReducer";

let reducers = combineReducers({
    theme: themeReducer,
    notes: notesReducer,
});

let store = createStore(reducers);

export default store;