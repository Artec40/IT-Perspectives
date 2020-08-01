import React from 'react'
import s from './Article.module.css'
//todo Убрать тег <a> и найти способ правильно строить таблицу гридов без него.
const Article = (props) => {
    return <div className={s.Article}><a>
        <div className={s.text}>{props.text}</div>
        <div><img src={props.image}/></div>
        <div className={s.time}>{props.time}</div>
        <div className={s.name}>{props.name}</div>
        <div className={s.link}>{props.link}</div>
    </a></div>
}

export default Article