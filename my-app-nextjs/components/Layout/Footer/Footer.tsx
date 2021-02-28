import React from 'react'
import s from './Footer.module.scss'
import {useSelector} from 'react-redux'
import {AppStateType} from '../../../redux/redux-store'
import {LinksType} from '../../../types/types'
//todo убрать лишний div с img, который использовался для выравнивания.
const Footer = () => {
    const stateIconElements: Array<LinksType> = useSelector((state: AppStateType) => state.footer.links)
    let iconElements = stateIconElements.map((l) => <div key={l.id}><img src={l.image}/></div>)
    return (
        <div className={s.Footer}>
            <div className={s.text}>Узнать больше</div>
            <div></div>
            {iconElements}
        </div>
    )
}

export default Footer