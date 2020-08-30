import React from 'react'
import s from './Team.module.css'
import Article from './Article/Article'
import Employee from './Employee/Employee'

const Team = ({employees, articles}) => {

    let renderEmployees = (employees) => {
        return employees.map((e, i) => <Employee key={i} image={e.teammatePhoto} title={e.teammateShortName}/>)
    }
    let renderArticles = (articles) => {
        return articles.map((e,i) => <Article key={i} text={e.articleDescription} day={e.articleDate}
                                                           name={e.authorName} image={e.authorPhoto}
                                                           link={e.articleTitle}/>)
    }

    return <div className={s.Team}>
        <div className={s.title}>НАША КОМАНДА</div>
        {renderEmployees(employees)}
        {renderArticles(articles)}

    </div>
}

export default Team