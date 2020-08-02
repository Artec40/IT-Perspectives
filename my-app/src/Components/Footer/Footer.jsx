import React from 'react'
import s from './Footer.module.css'
//todo убрать лишний div с img, который использоваля для выравнивания.
const Footer = (props) => {

    let iconElements = props.state.links.map((l) => <div className={s.item}><img src={l.image}/></div>)

    return (
        <div className={s.Footer}>
            <div className={s.text}>Узнать больше</div>
            <div className={s.item}><img/></div>
            {iconElements}
        </div>
    )
}

export default Footer