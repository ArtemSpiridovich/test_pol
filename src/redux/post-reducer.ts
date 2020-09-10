import {Dispatch} from "redux";
import {api} from "../api/api";
import {PostType} from "../types/types";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "./store";

const initialState = {
  data: [] as Array<PostType>,
  filter: ''
};

export type InitialStateType = typeof initialState

export const postReducer = (state: InitialStateType = initialState, action: ReducerAction): InitialStateType => {
  switch (action.type) {
    case "SET-DATA":
      return {...state, data: action.data}
    case "SET-FILTER":
      return {...state, filter: action.filter}
    default:
      return state
  }
}

const getDataAC = (data: Array<PostType>) => ({type: "SET-DATA", data} as const)
const setFilterAC = (filter: string) => ({type: "SET-FILTER", filter} as const)

type ThunkType = ThunkAction<void, AppStateType, unknown, ReducerAction>

export const getPosts = (): ThunkType => async (dispatch: Dispatch) => {
  try {
    const res = await api.getPosts()
    dispatch(getDataAC(res.data.articles))
  } catch (error) {
    alert(error)
  }
}

export const setFilter = (filter: string): ThunkType => (dispatch: Dispatch) => {
  dispatch(setFilterAC(filter))
}

type GetDataType = ReturnType<typeof getDataAC>
type SetFilterType = ReturnType<typeof setFilterAC>
type ReducerAction = GetDataType | SetFilterType
