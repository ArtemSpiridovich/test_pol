import {Dispatch} from "redux";
import {api} from "../api/api";
import {PostType} from "../types/types";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "./store";

const initialState = {
  posts: [] as Array<PostType>,
  filter: '',
  status: null as null | 'ok'
};

export type InitialStateType = typeof initialState

export const postReducer = (state: InitialStateType = initialState, action: ReducerAction): InitialStateType => {
  switch (action.type) {
    case "SET-DATA":
      return {...state, posts: action.posts}
    case "SET-FILTER":
      return {...state, filter: action.filter}
    case "SET-STATUS":
      return {...state, status: action.status}
    default:
      return state
  }
}

const getPostsAC = (posts: Array<PostType>) => ({type: "SET-DATA", posts} as const)
const setFilterAC = (filter: string) => ({type: "SET-FILTER", filter} as const)
const setStatusAC = (status: null | 'ok') => ({type: "SET-STATUS", status} as const)

type ThunkType = ThunkAction<void, AppStateType, unknown, ReducerAction>

export const getPosts = (): ThunkType => async (dispatch: Dispatch) => {
  try {
    const res = await api.getPosts()
    dispatch(getPostsAC(res.data.articles))
    dispatch(setStatusAC('ok'))
  } catch (error) {
    console.log(error)
    dispatch(setStatusAC('ok'))
  }
}

export const setFilter = (filter: string): ThunkType => (dispatch: Dispatch) => {
  dispatch(setFilterAC(filter))
}

type GetDataType = ReturnType<typeof getPostsAC>
type setStatusAC = ReturnType<typeof setStatusAC>
type SetFilterType = ReturnType<typeof setFilterAC>
type ReducerAction = GetDataType | SetFilterType | setStatusAC
