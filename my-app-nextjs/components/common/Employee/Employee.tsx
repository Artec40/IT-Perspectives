import React from 'react'
import Link from 'next/link'
import s from './Employee.module.scss'
import {AboutUsPageEmployeeTypeSelector} from '../../../types/types'

const Employee: React.FC<AboutUsPageEmployeeTypeSelector> = ({
                                                                 linkComponentId,
                                                                 image,
                                                                 name,
                                                                 isComponentLinked
                                                             }) => {
    if (isComponentLinked)
        return <Link href={'/employee/' + linkComponentId}>
            <div className={s.Employee}>
                <img src={image}/>
                <h4>{name}</h4>
            </div>
        </Link>
    else
        return <div className={s.Employee}>
            <img src={image}/>
            <h4>{name}</h4>
        </div>
}

export default Employee