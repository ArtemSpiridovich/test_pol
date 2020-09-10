import React, {useEffect} from 'react';
import './styles/App.sass';
import {Header} from "./components/header/header";
import {Content} from "./components/content/content";
import {useDispatch} from 'react-redux';
import {getPosts} from "./redux/post-reducer";

export const App = () => {
  
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getPosts())
  }, [])
  
  return (
    <div className="app">
      <Header/>
      <Content/>
    </div>
  );
}

