import React from 'react';
import s from './header.module.sass'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {setFilter} from "../../redux/post-reducer";
//images
import logo from '../../assets/images/logo.svg'

export const Header: React.FC = () => {
  
  const dispatch = useDispatch()
  let filter = useSelector<AppStateType, string>(state => state.posts.filter)
  
  const setValue = (e: any) => {
    dispatch(setFilter(e.currentTarget.value))
  }
  
  return (
    <div className={s.header}>
      <img className={s.header__logo} src={logo} alt='logo'/>
      <input
        className={s.header__search}
        type='text'
        onChange={setValue}
        value={filter}
        placeholder="search"
      />
    </div>
  );
}
