import React from 'react'
import Head from 'next/head'
import {getAboutUsServerSideProps} from '../api/staticProps'
import AboutUs from '../components/AboutUs/AboutUs'
import {ProjectType, ArticleType, EmployeeType} from '../types/types'

type PropsType = {
    initialReduxState: {
        serverSideProjects: Array<ProjectType>
        serverSideEmployees: Array<EmployeeType>
        serverSideArticles: Array<ArticleType>
    }
}

export const Index: React.FC<PropsType> = ({initialReduxState}) => {
    return (
        <>
            <Head>
                <title>ИТ Перспективы</title>
                <link rel="icon" href="/favicon.ico"/>
                <meta name={'keywords'}
                      charSet="utf-8"
                      content={'ИТ перспективы, разработка, сайт, под заказ, javascript, react, next'}/>
            </Head>
            <AboutUs serverSideProjects={initialReduxState.serverSideProjects}
                     serverSideEmployees={initialReduxState.serverSideEmployees}
                     serverSideArticles={initialReduxState.serverSideArticles}/>
        </>
    )
}

export async function getServerSideProps(context) {
    return getAboutUsServerSideProps(context)
}

export default Index