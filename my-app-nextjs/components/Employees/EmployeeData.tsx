import React from 'react'
import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {
    getCurrentEmployee,
    getEmployeeArticles,
    getEmployeeProjects
} from '../../redux/aboutUs-selector'
import {aboutUsActions} from '../../redux/aboutUs-actions'
import EmployeeInfo from './EmployeeInfo/EmployeeInfo'
import ArticlesInfo from './ArticlesInfo/ArticlesInfo'
import s from './EmployeeData.module.scss'
import {AppStateType} from "../../redux/redux-store";
import {
    ArticleType,
    CurrentEmployeeType,
    EmployeePageArticleTypeSelector,
    EmployeePageCurrentEmployeeTypeSelector,
    EmployeePageProjectTypeSelector, ProjectType
} from "../../types/types";
//todo в h1 не отображается тень (EmployeeInfo расположен поверх h1, z-index не работает.

type PropsType = {
    serverSideEmployee: CurrentEmployeeType
    serverSideEmployeeProjects: Array<ProjectType>
    serverSideEmployeeArticles: Array<ArticleType>
}

const EmployeeData: React.FC<PropsType> = ({serverSideEmployee, serverSideEmployeeProjects, serverSideEmployeeArticles}) => {

    const employee: EmployeePageCurrentEmployeeTypeSelector = useSelector((state: AppStateType) => getCurrentEmployee(state))
    const projects: Array<EmployeePageProjectTypeSelector> = useSelector((state: AppStateType) => getEmployeeProjects(state))
    const articles: Array<EmployeePageArticleTypeSelector> = useSelector((state: AppStateType) => getEmployeeArticles(state))

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(aboutUsActions.setEmployeePage(serverSideEmployee, serverSideEmployeeProjects, serverSideEmployeeArticles))
    }, [dispatch])

    return <div>
        {(!employee || !projects || !articles) &&
        <div>Loading...</div>}

        {employee && projects && articles &&
        <div className={s.employeeData}>
            <h1 className={s.title}>О специалисте</h1>
            <EmployeeInfo employee={employee} projects={projects}/>
            <ArticlesInfo articles={articles}/>
        </div>}
    </div>
}


export default EmployeeData