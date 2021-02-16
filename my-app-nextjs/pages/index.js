import Head from 'next/head'
import { getAboutUsStaticProps } from '../api/staticProps'
import AboutUs from '../components/AboutUs/AboutUs.tsx'

export default function Index({initialReduxState}) {

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

export function getStaticProps() {
    return getAboutUsStaticProps()
}