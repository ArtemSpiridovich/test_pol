import React from 'react';
import s from './grid.module.sass'
import {Post} from "../../common/post/post";
import {PostType} from "../../../types/types";

type PropTypes = {
  data: Array<PostType>
}

export const GalleryGrid: React.FC<PropTypes> = ({data}) => {
  return (
    <div className={s.grid}>
      {data.map((e, i) => {
        return <Post
          key={i}
          img={e.urlToImage}
          title={e.title}
          url={e.url}
          description={e.description}
          className='postGrid'/>
      })}
    </div>
  );
}