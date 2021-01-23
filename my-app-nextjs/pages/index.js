import Head from 'next/head'
import { getAboutUsStaticProps } from '../api/staticProps'
import AboutUsContainer from '../components/AboutUs/AboutUsContainer'

export default function Index({initialReduxState}) {

    return (
        <>
            <Head>
                <title>ИТ Перспективы</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name={'keywords'}
                      content={'ИТ перспективы, разработка, сайт, под заказ, javascript, react, next'}/>
                <meta charSet="utf-8"/>
            </Head>
            <AboutUsContainer serverSideProjects={initialReduxState.serverSideProjects}
                              serverSideEmployees={initialReduxState.serverSideEmployees}
                              serverSideArticles={initialReduxState.serverSideArticles}/>
        </>
    )
}

export function getStaticProps() {
    return getAboutUsStaticProps()
}