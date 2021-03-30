import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Form} from "react-final-form";
import {
    EmployeePageCurrentEmployeeTypeSelector,
    EmployeePageProjectTypeSelector
} from '../../../types/types'
import {saveEmployeeName} from "../../../redux/aboutUs-reducer"
import {AppStateType} from "../../../redux/redux-store"
import AboutEmployee from './AboutEmployee/AboutEmployee'
import LastActivity from './LastActivity/LastActivity'
import Employee from '../../common/Employee/Employee'
import EmployeeNameDataForm from "../../common/Employee/EmployeeNameDataForm"
import s from './EmployeeInfo.module.scss'


type PropsType = {
    employee: EmployeePageCurrentEmployeeTypeSelector
    projects: Array<EmployeePageProjectTypeSelector>
}

const EmployeeInfo: React.FC<PropsType> = ({employee, projects}) => {

    let isUserAuthorised: boolean = useSelector((state: AppStateType) => state.loginPage.currentUser.isAuth)
    let userId: number = useSelector((state: AppStateType) => state.loginPage.currentUser.userId)

    const [editMode, setEditMode] = useState(false)

    const dispatch = useDispatch()

    const changeNameSubmit = async (formData) => {
        dispatch(saveEmployeeName(employee.currentEmployeeId, {shortName: formData.name})).then(() => {
            setEditMode(false)
        })
    }
    return editMode
        ? <Form
            onSubmit={changeNameSubmit} render={({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
                <div className={s.employeeInfo}>
                    <EmployeeNameDataForm image={employee.image}
                                          name={employee.name}/>
                    <AboutEmployee fullname={employee.fullname}
                                   company={employee.company}
                                   location={employee.location}
                                   website={employee.website}
                                   phone={employee.phone}
                                   articlesCount={employee.articlesCount}
                                   personalInfo={employee.personalInfo}/>
                    <LastActivity projects={projects}/>
                    <button type='submit'>Сохранить</button>
                </div>
            </form>
        )}>
        </Form>
        : <div className={s.employeeInfo}>
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
            <button onClick={() => setEditMode(true)}>Редактировать</button>}
        </div>
}

export default EmployeeInfo