import React from 'react';
import s from './post.module.sass'

type PropTypes = {
  img: string
  title: string
  url: string
  description: string
  className: string
}

export const Post: React.FC<PropTypes> = ({img, title, url, description, className}) => {
  return (
    <div className={s[className]}>
      <img className={s[className + '__img']} src={img} alt='image'/>
      <h1 className={s[className + '__title']}>{title}</h1>
      <p className={s[className + '__description']}>{description}</p>
      <a className={s[className + '__link']} href={url} target='_blank'>more</a>
    </div>
  );
}
