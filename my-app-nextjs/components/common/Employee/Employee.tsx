import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Link from 'next/link'
import s from './Employee.module.scss'
import {AboutUsPageEmployeeTypeSelector} from '../../../types/types'
import {AppStateType} from "../../../redux/redux-store";
import {getShortNameByAccountId} from '../../../redux/aboutUs-selector'
import {getEmployees} from "../../../redux/aboutUs-reducer";

const Employee: React.FC<AboutUsPageEmployeeTypeSelector> = ({id, image, name}) => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getEmployees())
    }, [])

    let employees = useSelector((state: AppStateType) => state.aboutUs.employees)
    let isUserAuthorised: boolean = useSelector((state: AppStateType) => state.loginPage.currentUser.isAuth)
    let userId: number = useSelector((state: AppStateType) => state.loginPage.currentUser.userId)
    let currentUser: string | null = useSelector((state: AppStateType) => getShortNameByAccountId(state, userId))

    if (id === 0)
        return <div className={s.Employee}>
            {!employees &&
            <div>Loading...</div>}

            {employees &&
            <div>
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