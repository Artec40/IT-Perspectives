import Head from 'next/head'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    getProjectsElements,
    getEmployeesElements,
    getArticlesElements,
    getCompanyLogo,
    getCompanyName,
    getDescription,
    getTitle
} from '../redux/aboutUs-selector'
import { getAboutUsElements } from '../redux/aboutUs-reducer'
import { getAboutUsStaticProps } from '../api/staticProps'
import AboutUs from '../components/AboutUs/AboutUs'

export default function Index({props: serverData}) {

    const name = useSelector(state => getCompanyName(state))
    const logo = useSelector(state => getCompanyLogo(state))
    const title = useSelector(state => getTitle(state))
    const description = useSelector(state => getDescription(state))
    const projects = useSelector(state => getProjectsElements(state))
    const employees = useSelector(state => getEmployeesElements(state))
    const articles = useSelector(state => getArticlesElements(state))

    const dispatch = useDispatch()
    const [data, setData] = useState(serverData)

    useEffect(() => {
        async function load() {
            dispatch(getAboutUsElements())
            const data = {
                projects: projects,
                employees: employees,
                articles: articles
            }
            setData(data)
        }

        if (!serverData) {
            load()
        }
    }, [dispatch])

    if (!data) {
        return (
            <p>Loading...</p>
        )
    }

    return (
        <>
            <Head>
                <title>ИТ Перспективы</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name={'keywords'}
                      content={'ИТ перспективы, разработка, сайт, под заказ, javascript, react, next'}/>
                <meta charSet="utf-8"/>
            </Head>
{/*            {console.log(serverData.projects)}*/}
            <AboutUs name={name}
                     logo={logo}
                     title={title}
                     description={description}
                     projects={projects}
                     employees={employees}
                     articles={articles}/>
        </>
    )
}

export function getStaticProps() {
    return getAboutUsStaticProps()
}
