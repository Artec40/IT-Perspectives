import React from 'react'
import s from './ArticlesInfo.module.scss'
import Article from './Articles/Article'

const ArticlesInfo = () => {
    return <div className={s.articlesInfo}>
        <h3 className={s.title}>Статьи</h3>
        <Article/>
        <Article/>
    </div>
}

export default ArticlesInfo