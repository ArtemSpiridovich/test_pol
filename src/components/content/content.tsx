import React, {useState} from 'react'
import s from './content.module.sass'
import {GalleryGrid} from "./grid/gallery-grid"
import {GalleryCarousel} from './carousel/gallery-carousel'
import {useSelector} from 'react-redux'
import {AppStateType} from "../../redux/store"
import {InitialStateType} from '../../redux/post-reducer'
//images
import grid from '../../assets/images/grid.svg'
import carousel from '../../assets/images/carousel.svg'

export const Content: React.FC = () => {
  
  let {data, filter} = useSelector<AppStateType, InitialStateType>(state => state.posts)
  
  let posts = data.filter(e => filter.toLowerCase() === e.title.slice(0, filter.length).toLowerCase())
  
  const [view, setView] = useState(false)
  
  let icon = view ? carousel : grid
  let value = !view
  
  let contentType = view ? <>
    <GalleryGrid data={posts}/>
    <img
      className={s.content__icon}
      src={icon} alt='icon'
      onClick={() => setView(value)}/>
  </> : <>
    <GalleryCarousel data={posts}/>
    <img
      className={s.content__icon}
      src={icon} alt='icon'
      onClick={() => setView(value)}/>
  </>
  
  return (
    <div className={s.content}>
      {posts.length !== 0
        ? contentType
        : <span className={s.content__text}>
        No results... try again
      </span>}
    </div>
  );
}