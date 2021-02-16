import React from 'react'
import s from './Description.module.scss'

type PropsType = {
    title: string
    description: string
}

const Description: React.FC<PropsType> = ({title, description}) => {
    return (<div className={s.Description}>
            <h2>{title}</h2>
            <div>{description}</div>
        </div>
    )
}

export default Description