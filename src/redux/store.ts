import thunkMiddleware from "redux-thunk";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {postReducer} from "./post-reducer";

const rootReducer = combineReducers({
    posts: postReducer
});


export type AppStateType = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));


// @ts-ignore
window.store = store

export default store;