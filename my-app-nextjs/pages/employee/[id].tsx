import React from 'react'
import Head from 'next/head'
import {useRouter} from 'next/router'
import {
    getEmployeeStaticPaths,
    getEmployeeStaticProps
} from '../../api/staticProps'
import EmployeeData from '../../components/Employees/EmployeeData'
import {ArticleType, CurrentEmployeeType, ProjectType} from "../../types/types";

type PropsType = {
    initialReduxState: {
        serverSideEmployee: CurrentEmployeeType
        serverSideEmployeeProjects: Array<ProjectType>
        serverSideEmployeeArticles: Array<ArticleType>
    }
}

const EmployeePage: React.FC<PropsType> = ({initialReduxState}) => {

    const router = useRouter()
    if (router.isFallback) {
        return <div>Loading...</div>
    }

    return <>
        <Head>
            <title>ИТ Перспективы</title>
        </Head>
        <EmployeeData serverSideEmployee={initialReduxState.serverSideEmployee}
                      serverSideEmployeeProjects={initialReduxState.serverSideEmployeeProjects}
                      serverSideEmployeeArticles={initialReduxState.serverSideEmployeeArticles}/>
    </>
}

export async function getStaticPaths(context) {
    return getEmployeeStaticPaths(context)
}

export async function getStaticProps({params}) {
    return getEmployeeStaticProps(params.id)
}

export default EmployeePage