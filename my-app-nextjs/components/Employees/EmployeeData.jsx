import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    getCurrentEmployee,
    getEmployeeArticles,
    getEmployeeProjects
} from '../../redux/aboutUs-selector'
import { actions } from '../../redux/aboutUs-actions.ts'
import EmployeeInfo from './EmployeeInfo/EmployeeInfo'
import ArticlesInfo from './ArticlesInfo/ArticlesInfo'
import s from './EmployeeData.module.scss'
//todo в h1 не отображается тень (EmployeeInfo расположен поверх h1, z-index не работает.

const EmployeeData = ({serverSideEmployee, serverSideEmployeeProjects, serverSideEmployeeArticles}) => {

    const employee = useSelector(state => getCurrentEmployee(state))
    const projects = useSelector(state => getEmployeeProjects(state))
    const articles = useSelector(state => getEmployeeArticles(state))

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actions.setEmployeePage(serverSideEmployee, serverSideEmployeeProjects, serverSideEmployeeArticles))
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