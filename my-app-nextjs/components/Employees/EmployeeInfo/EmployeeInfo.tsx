import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {
    EmployeePageCurrentEmployeeTypeSelector,
    EmployeePageProjectTypeSelector
} from '../../../types/types'
import EmployeeInfoData from './EmployeeInfoData/EmployeeInfoData'
import EmployeeInfoDataForm from "./EmployeeInfoDataForm/EmployeeInfoDataForm";
import {saveEmployeeName} from "../../../redux/aboutUs-reducer";

type PropsType = {
    employee: EmployeePageCurrentEmployeeTypeSelector
    projects: Array<EmployeePageProjectTypeSelector>
}

const EmployeeInfo: React.FC<PropsType> = ({employee, projects}) => {

    const [editMode, setEditMode] = useState(false)

    const dispatch = useDispatch()

    //todo Написать автотипизацию для formData, типизировать useState.
    const changeNameSubmit = async (formData: any) => {
        dispatch(saveEmployeeName(employee.currentEmployeeId, {shortName: formData.name})).then(() => {
            setEditMode(false)
        })
    }

    return editMode
        ? <EmployeeInfoDataForm employee={employee}
                                projects={projects}
                                changeNameSubmit={changeNameSubmit}/>
        : <EmployeeInfoData employee={employee}
                            projects={projects}
                            setEditModeTrue={() => setEditMode(true)}/>
}

export default EmployeeInfo