import React from 'react'
import s from './Team.module.scss'
import ArticlePreview from '../../common/ArticlePreview/ArticlePreview'
import Employee from '../../common/Employee/Employee'

const Team = ({
                  employees,
                  articles
              }) => {

    let renderEmployees = (employees) => {
        return employees.map((e) =>
            <div className={s.NavLink}>
                <Employee id={e.id} image={e.image} name={e.name}/>
            </div>)
    }
    let renderArticles = (articles) => {
        return articles.map((e, i) => <ArticlePreview key={i} text={e.text} day={e.day}
                                                      name={e.name} image={e.image}
                                                      link={e.link}/>)
    }

    return <div className={s.Team}>
        <h4 className={s.title}>НАША КОМАНДА</h4>
        {renderEmployees(employees)}
        {renderArticles(articles)}
    </div>
}

export default Team