import React, {useState} from 'react'
import s from './content.module.sass'
import {GalleryGrid} from "./grid/gallery-grid"
import {GalleryCarousel} from './carousel/gallery-carousel'
import {useSelector} from 'react-redux'
import {AppStateType} from "../../redux/store"
import {GetItems} from "../../redux/selectors";
import {PostType} from "../../types/types";
//images
import grid from '../../assets/images/grid.svg'
import carousel from '../../assets/images/carousel.svg'

export const Content: React.FC = () => {
  
  let posts = useSelector<AppStateType, Array<PostType>>(state => GetItems(state.posts))
  
  const [view, setView] = useState(true)
  
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