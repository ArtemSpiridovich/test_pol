import {InitialStateType} from "./post-reducer";

export const GetItems = (state: InitialStateType) => {
  // return state.posts.filter(e => state.filter.toLowerCase() === e.title.slice(0, state.filter.length).toLowerCase())
  return state.posts.filter(e => {
    if(e.title.toLowerCase().indexOf(state.filter.toLowerCase()) !== -1) {
      return e
    }
  })
}