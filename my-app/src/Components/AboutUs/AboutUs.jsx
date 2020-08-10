import React from 'react'
import s from './AboutUs.module.css'
import CompanyNameContainer from './CompanyName/CompanyNameContainer'
import DescriptionContainer from './Description/DescriptionContainer'
import LastProjectsContainer from './LastProjects/LastProjectsContainer'
import TeamContainer from './Team/TeamContainer'

const AboutUs = () => {
    return <div className={s.AboutUs}>
        <CompanyNameContainer/>
        <DescriptionContainer/>
        <LastProjectsContainer/>
        <TeamContainer/>
    </div>
}

export default AboutUs