import React from 'react'
import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import s from './AboutUs.module.scss'
import CompanyName from './CompanyName/CompanyName'
import Description from './Description/Description'
import LastProjects from './LastProjects/LastProjects'
import Team from './Team/Team'
import {
    getArticlesElements, getCompanyLogo, getCompanyName,
    getDescription, getEmployeesElements,
    getProjectsElements, getTitle
} from '../../redux/aboutUs-selector'
import {setAboutUsPage} from '../../redux/aboutUs-reducer'
import {AppStateType} from '../../redux/redux-store'
import {
    ArticleType, AboutUsPageArticleTypeSelector,
    EmployeeType, AboutUsPageEmployeeTypeSelector,
    ProjectType, AboutUsPageProjectTypeSelector
} from "../../types/types";

type PropsType = {
    serverSideProjects: Array<ProjectType>
    serverSideEmployees: Array<EmployeeType>
    serverSideArticles: Array<ArticleType>
}

const AboutUs: React.FC<PropsType> = ({
                                          serverSideProjects,
                                          serverSideEmployees,
                                          serverSideArticles
                                      }) => {

    const name: string = useSelector((state: AppStateType) => getCompanyName(state))
    const logo: string = useSelector((state: AppStateType) => getCompanyLogo(state))
    const title: string = useSelector((state: AppStateType) => getTitle(state))
    const description: string = useSelector((state: AppStateType) => getDescription(state))
    const projects: Array<AboutUsPageProjectTypeSelector> = useSelector((state: AppStateType) => getProjectsElements(state))
    const employees: Array<AboutUsPageEmployeeTypeSelector> = useSelector((state: AppStateType) => getEmployeesElements(state))
    const articles: Array<AboutUsPageArticleTypeSelector> = useSelector((state: AppStateType) => getArticlesElements(state))
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setAboutUsPage(serverSideProjects, serverSideEmployees, serverSideArticles))
    }, [dispatch])

    return <div className={s.AboutUs}>
        <CompanyName name={name} logo={logo}/>
        <Description title={title} description={description}/>
        <LastProjects projects={projects}/>
        <Team employees={employees} articles={articles}/>
    </div>
}

export default AboutUs