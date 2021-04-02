import React from 'react'
import {useSelector} from 'react-redux'
import {
    EmployeePageCurrentEmployeeTypeSelector,
    EmployeePageProjectTypeSelector
} from '../../../../types/types'
import {AppStateType} from "../../../../redux/redux-store"
import AboutEmployee from './AboutEmployee/AboutEmployee'
import LastActivity from './LastActivity/LastActivity'
import Employee from '../../../common/Employee/Employee'
import s from '../EmployeeInfo.module.scss'

type PropsType = {
    employee: EmployeePageCurrentEmployeeTypeSelector
    projects: Array<EmployeePageProjectTypeSelector>
    setEditModeTrue: () => void
}

const EmployeeInfoData: React.FC<PropsType> = ({employee, projects, setEditModeTrue}) => {

    let isUserAuthorised: boolean = useSelector((state: AppStateType) => state.loginPage.currentUser.isAuth)
    let userId: number = useSelector((state: AppStateType) => state.loginPage.currentUser.userId)

    return <div className={s.employeeInfo}>
        <Employee image={employee.image}
                  name={employee.name}
                  isComponentLinked={employee.isComponentLinked}/>
        <AboutEmployee fullname={employee.fullname}
                       company={employee.company}
                       location={employee.location}
                       website={employee.website}
                       phone={employee.phone}
                       articlesCount={employee.articlesCount}
                       personalInfo={employee.personalInfo}/>
        <LastActivity projects={projects}/>
        {isUserAuthorised && (userId === employee.currentEmployeeId) &&
        <button onClick={() => setEditModeTrue()}>Редактировать</button>}
    </div>
}

export default EmployeeInfoData