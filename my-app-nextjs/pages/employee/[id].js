import Head from 'next/head'
import { useRouter } from 'next/router'
import {
    getEmployeeStaticPaths,
    getEmployeeStaticProps
} from '../../api/staticProps'
import EmployeeData from '../../components/Employees/EmployeeData'

export default function EmployeePage({initialReduxState}) {

    const router = useRouter()
    if (router.isFallback) {
        return <div>Loading...</div>
    }

    return <>
        <Head>
            <title>ИТ Перспективы</title>
        </Head>
        <EmployeeData employeeId={router.query.id}
                      serverSideEmployee={initialReduxState.serverSideEmployee}
                      serverSideEmployeeProjects={initialReduxState.serverSideEmployeeProjects}
                      serverSideEmployeeArticles={initialReduxState.serverSideEmployeeArticles}/>
    </>
}

export function getStaticPaths() {
    return getEmployeeStaticPaths()
}

export function getStaticProps({params}) {
    return getEmployeeStaticProps(params.id)
}
