import {combineReducers, createStore} from "redux";
import themeReducer from "./themeReducer";
import notesReducer from "./notesReducer";

const reducers = combineReducers({
    theme: themeReducer,
    notes: notesReducer,
});

const store = createStore(reducers);

export default store;