import axios from "axios";
import { ArticleType } from "../types/types";

const instance = axios.create({
  baseURL: `http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${process.env.REACT_APP_API_KEY}`
  }
)

export const api =  {
  getPosts: () => {
    return instance.get<ArticleType>('')
  }
};



//f8505bcc9b764bf4ad7a4f6fdb97cd8d - API KEY
//http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=f8505bcc9b764bf4ad7a4f6fdb97cd8d