import axios from "axios";
import { ArticleType } from "../types/types";

const instance = axios.create({
  baseURL: `http://newsapi.org/v2`
  }
)

instance.interceptors.request.use(function (config){
  config.params = {'apiKey': process.env.REACT_APP_API_KEY}
  return config
}, function (error) {
  return Promise.reject(error)
})

export const api =  {
  getPosts: (sources: string = 'techcrunch') => {
    return instance.get<ArticleType>(`/top-headlines?sources=${sources}`)
  }
};