import {InitialStateType} from "./post-reducer";

export const GetItems = (state: InitialStateType) => {
  return state.posts.filter(e => state.filter.toLowerCase() === e.title.slice(0, state.filter.length).toLowerCase())
}