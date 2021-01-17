import React from 'react'
import s from './Footer.module.scss'
//todo убрать лишний div с img, который использовался для выравнивания.
const Footer = (props) => {
    let iconElements = props.iconElements.map((l) => <div><img src={l.image}/></div>)

    return (
        <div className={s.Footer}>
            <div className={s.text}>Узнать больше</div>
            <div></div>
            {iconElements}
        </div>
    )
}

export default Footer