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
import {ArticleTypeSelector, EmployeeTypeSelector, ProjectTypeSelector} from "../../types/types";

type PropsType = {
    //todo Изучить как типизировать запросы на сервак.
}

const AboutUs = ({serverSideProjects, serverSideEmployees, serverSideArticles}) => {

    const name = useSelector((state: AppStateType): string => getCompanyName(state))
    const logo = useSelector((state: AppStateType): string => getCompanyLogo(state))
    const title = useSelector((state: AppStateType): string => getTitle(state))
    const description = useSelector((state: AppStateType): string => getDescription(state))
    const projects = useSelector((state: AppStateType): Array<ProjectTypeSelector> => getProjectsElements(state))
    const employees = useSelector((state: AppStateType): Array<EmployeeTypeSelector> => getEmployeesElements(state))
    const articles = useSelector((state: AppStateType): Array<ArticleTypeSelector> => getArticlesElements(state))

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