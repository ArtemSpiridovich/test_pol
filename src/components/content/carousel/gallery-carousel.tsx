import React, {MutableRefObject, useRef} from 'react';
import s from './carousel.module.sass'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import {Post} from "../../common/post/post";
import {PostType} from '../../../types/types';
//images
import left from '../../../assets/images/left-arrow.svg'
import right from '../../../assets/images/right-arrow.svg'
import dis_left from '../../../assets/images/left-arrow-dis.svg'
import dis_right from '../../../assets/images/right-arrow-dis.svg'
import ReactAliceCarousel from "react-alice-carousel";


type PropsType = {
  data: Array<PostType>
}

export const GalleryCarousel: React.FC<PropsType> = ({data}) => {
  
  let carousel: MutableRefObject<ReactAliceCarousel | null | undefined> = useRef()
  
  const state = {
    galleryItems: data.map((e, i ) => {
      return <Post
          key={i}
          img={e.urlToImage}
          url={e.url}
          title={e.title}
          description={e.description}
          className="postCarousel"/>
    })
  }
  
  return (
    <div className={s.carousel}>
      <AliceCarousel
        dotsDisabled={true}
        buttonsDisabled={true}
        items={state.galleryItems}
        ref={(el) => carousel.current = el}
      />
      <button className={s.carousel__prev} disabled={data.length <= 1} onClick={() => carousel.current?.slidePrev()}>
        <img src={data.length <= 1 ? dis_left : left} alt='arrow'/>
      </button>
      <button className={s.carousel__next} disabled={data.length <= 1} onClick={() => carousel.current?.slideNext()}>
        <img src={data.length <= 1 ? dis_right : right} alt='arrow'/>
      </button>
    </div>
  );
}