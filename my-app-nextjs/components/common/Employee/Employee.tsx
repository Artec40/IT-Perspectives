import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Link from 'next/link'
import s from './Employee.module.scss'
import {AboutUsPageEmployeeTypeSelector} from '../../../types/types'
import {AppStateType} from "../../../redux/redux-store";
import {saveEmployeeName} from "../../../redux/aboutUs-reducer";
import EmployeeNameDataForm from './EmployeeNameDataForm'

const Employee: React.FC<AboutUsPageEmployeeTypeSelector> = ({
                                                                 linkComponentId,
                                                                 currentEmployeeId,
                                                                 image,
                                                                 name,
                                                                 isComponentLinked
                                                             }) => {
//todo типизировать useState
    const [editMode, setEditMode] = useState(false)

    const dispatch = useDispatch()

    let isUserAuthorised: boolean = useSelector((state: AppStateType) => state.loginPage.currentUser.isAuth)
    let userId: number = useSelector((state: AppStateType) => state.loginPage.currentUser.userId)

    const changeNameSubmit = async (formData) => {
        dispatch(saveEmployeeName(currentEmployeeId, {shortName: formData.name})).then(() => {
            setEditMode(false)
        })
    }

    if (isComponentLinked)
        return <Link href={'/employee/' + linkComponentId}>
            <div className={s.Employee}>
                <img src={image}/>
                <h4>{name}</h4>
            </div>
        </Link>
    else
        return <div className={s.Employee}>
            {editMode
                ? <EmployeeNameDataForm name={name} image={image} onSubmit={changeNameSubmit}/>
                : <div>
                    <img src={image}/>
                    <h4>{name}</h4>
                    {isUserAuthorised && (userId === currentEmployeeId) &&
                    <button onClick={() => setEditMode(true)}>Редактировать</button>}
                </div>}
        </div>

}

export default Employee