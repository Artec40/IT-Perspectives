import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {
    EmployeePageCurrentEmployeeTypeSelector,
    EmployeePageProjectTypeSelector
} from '../../../types/types'
import EmployeeInfoData from './EmployeeInfoData/EmployeeInfoData'
import EmployeeInfoDataForm from "./EmployeeInfoDataForm/EmployeeInfoDataForm";
import {saveEmployeeData} from "../../../redux/aboutUs-reducer";
import {employeeDataType} from "../../../api/api";

type PropsType = {
    employee: EmployeePageCurrentEmployeeTypeSelector
    projects: Array<EmployeePageProjectTypeSelector>
}

const EmployeeInfo: React.FC<PropsType> = ({employee, projects}) => {

    const [editMode, setEditMode] = useState(false)

    const dispatch = useDispatch()

    const changeNameSubmit = async (formData: employeeDataType) => {
        dispatch(saveEmployeeData(employee.currentEmployeeId, {
            ...formData,
            ArticlesCount: Number(formData.ArticlesCount)
        }))
            .then(() => {setEditMode(false)})
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