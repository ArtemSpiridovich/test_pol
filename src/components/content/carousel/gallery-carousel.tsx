import React from 'react';
import s from './carousel.module.sass'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import {Post} from "../../common/post/post";
import {PostType} from '../../../types/types';
//images
import left from '../../../assets/images/left-arrow.svg'
import right from '../../../assets/images/right-arrow.svg'
import disleft from '../../../assets/images/left-arrow-dis.svg'
import disright from '../../../assets/images/right-arrow-dis.svg'


type PropsType = {
  data: Array<PostType>
}

export const GalleryCarousel: React.FC<PropsType> = ({data}) => {
  
  let carousel: any = React.createRef()
  
  const state = {
    galleryItems: data.map((e, i ) => {
      return <Post
          key={i}
          img={e.urlToImage}
          url={e.url}
          title={e.title}
          description={e.description}
          classname="postCarousel"/>
    })
  }
  
  return (
    <div className={s.carousel}>
      <AliceCarousel
        dotsDisabled={true}
        buttonsDisabled={true}
        items={state.galleryItems}
        ref={(el) => carousel = el}
      />
      <button className={s.carousel__prev} disabled={data.length <= 1} onClick={() => carousel.slidePrev()}>
        <img src={data.length <= 1 ? disleft : left} alt='arrow'/>
      </button>
      <button className={s.carousel__next} disabled={data.length <= 1} onClick={() => carousel.slideNext()}>
        <img src={data.length <= 1 ? disright : right} alt='arrow'/>
      </button>
    </div>
  );
}