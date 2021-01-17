import AboutUsContainer from '../components/AboutUs/AboutUsContainer'
import Head from 'next/head'

export default function Index() {
    return (
        <>
            <Head>
                <title>ИТ Перспективы</title>
                <meta name={'keywords'}
                      content={'ИТ перспективы, разработка, сайт, под заказ, javascript, react, next'}/>
                <meta charSet="utf-8"/>
            </Head>
            <AboutUsContainer/>
        </>
    )
}
