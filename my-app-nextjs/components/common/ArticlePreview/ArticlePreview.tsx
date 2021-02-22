import React from 'react'
import {AboutUsPageArticleTypeSelector} from '../../../types/types'
import s from './ArticlePreview.module.scss'
//todo Убрать тег <a> и найти способ правильно строить таблицу гридов без него.
const ArticlePreview: React.FC<AboutUsPageArticleTypeSelector> = ({text, image, day, name, link}) => {
    return <div className={s.Article}><a>
        <div className={s.text}>{text}</div>
        <img src={image}/>
        <div className={s.day}>{day}</div>
        <div className={s.name}>{name}</div>
        <div className={s.link}>{link}</div>
    </a></div>
}

export default ArticlePreview