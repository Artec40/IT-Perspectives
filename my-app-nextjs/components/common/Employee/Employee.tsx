import React, {useEffect, useState} from 'react'
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
    let currentUser: string | null = useSelector((state: AppStateType) => getShortNameByAccountId(state, userId))

    // при id===0 компонент используется при отрисовке страницы /employee{id}, при else - стартовая страница.
    if (id === 0)
        return <div className={s.Employee}>
            {editMode
                ? <div>
                    <input/>
                </div>
                : <div>
                    <img src={image}/>
                    <h4>{name}</h4>
                    {isUserAuthorised && (currentUser === name) && <button>Редактировать</button>}
                </div>}
        </div>
    else
        return <Link href={'/employee/' + id}>
            <div className={s.Employee}>
                <img src={image}/>
                <h4>{name}</h4>
            </div>
        </Link>
}

export default Employee