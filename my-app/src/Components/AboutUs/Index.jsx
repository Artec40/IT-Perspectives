import React from 'react'
import s from './Index.module.css'
import CompanyName from './CompanyName/CompanyName'
import Description from './Description/Description'
import LastProjects from './LastProjects/LastProjects'
import Team from './Team/Team'

const Index = () => {
    return <div className={s.Index}>
        <CompanyName/>
        <Description/>
        <LastProjects/>
        <Team/>
    </div>
}

export default Index