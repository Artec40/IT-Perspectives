import React from 'react'
import s from './Team.module.css'
import Article from './Article/Article'
import Employee from './Employee/Employee'

const Team = (props) => {

    let employeesElements = props.state.map((e) => <Employee image={e.image} title={e.name}/>)
    let articlesElements = props.state.map((e) => <Article text={e.text} day={e.day} name={e.name} image={e.image}
                                                           link={e.link}/>)

    return <div className={s.Team}>
        <div className={s.title}>НАША КОМАНДА</div>
        {employeesElements}
        {articlesElements}

    </div>
}

export default Team