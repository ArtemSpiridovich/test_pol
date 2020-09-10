import React from 'react';
import s from './post.module.sass'

type PropTypes = {
  img: string
  title: string
  url: string
  description: string
  classname: string
}

export const Post: React.FC<PropTypes> = ({img, title, url, description, classname}) => {
  return (
    <div className={s[classname]}>
      <img className={s[classname + '__img']} src={img} alt='image'/>
      <h1 className={s[classname + '__title']}>{title}</h1>
      <p className={s[classname + '__description']}>{description}</p>
      <a className={s[classname + '__link']} href={url}>more</a>
    </div>
  );
}
