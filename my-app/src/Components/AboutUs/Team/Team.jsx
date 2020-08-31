import React from 'react'
import s from './Team.module.css'
import Article from './Article/Article'
import Employee from './Employee/Employee'

const Team = ({employees, articles}) => {

    let renderEmployees = (employees) => {
        return employees.map((e, i) => <Employee key={i} image={e.image} name={e.name}/>)
    }
    let renderArticles = (articles) => {
        return articles.map((e, i) => <Article key={i} text={e.text} day={e.day}
                                               name={e.name} image={e.image}
                                               link={e.link}/>)
    }

    return <div className={s.Team}>
        <div className={s.title}>НАША КОМАНДА</div>
        {renderEmployees(employees)}
        {renderArticles(articles)}

    </div>
}

export default Team