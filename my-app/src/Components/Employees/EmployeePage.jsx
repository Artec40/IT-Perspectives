import React from 'react'
import s from './EmployeePage.module.scss'
import EmployeeInfo from './EmployeeInfo/EmployeeInfo'
import ArticlesInfo from './ArticlesInfo/ArticlesInfo'
//todo в h1 не отображается тень (EmployeeInfo расположен поверх h1, z-index не работает.

const EmployeePage = ({employee, projects, articles}) => {
    return <div>
        <h1 className={s.title}>О специалисте</h1>
        <EmployeeInfo employee={employee} projects={projects}/>
        <ArticlesInfo articles={articles}/>
    </div>
}

export default EmployeePage