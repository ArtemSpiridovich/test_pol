import React, {useEffect} from 'react';
import './styles/App.sass';
import {Header} from "./components/header/header";
import {Content} from "./components/content/content";
import {useDispatch, useSelector} from 'react-redux';
import {getPosts} from "./redux/post-reducer";
import {AppStateType} from "./redux/store";
//images
import loading from './assets/images/loader.gif'

export const App = () => {
  
  const dispatch = useDispatch()
  let status = useSelector<AppStateType, null | 'ok'>(state => state.posts.status)
  
  useEffect(() => {
    dispatch(getPosts())
  }, [])
  
  return (
    <div className="app">
      <Header/>
      {
        status
          ? <Content/>
          : <div className='loading'>
            <img src={loading} alt='loading'/>
          </div>
      }
    
    </div>
  );
}

