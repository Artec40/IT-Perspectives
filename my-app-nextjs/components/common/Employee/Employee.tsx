import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Link from 'next/link'
import s from './Employee.module.scss'
import {AboutUsPageEmployeeTypeSelector} from '../../../types/types'
import {AppStateType} from "../../../redux/redux-store";
import {getShortNameByAccountId} from '../../../redux/aboutUs-selector'
import {getEmployees} from "../../../redux/aboutUs-reducer";

const Employee: React.FC<AboutUsPageEmployeeTypeSelector> = ({id, image, name}) => {
//todo типизировать useState
    const [editMode, setEditMode] = useState(false)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getEmployees())
    }, [])

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
        return <Link href={'/employee/' + id}>
            <div className={s.Employee}>
                <img src={image}/>
                <h4>{name}</h4>
            </div>
        </Link>
}

export default Employee