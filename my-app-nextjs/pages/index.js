import AboutUsContainer from '../components/AboutUs/AboutUsContainer'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import { aboutUsAPI } from '../api'

export default function Index({props: serverData}) {

    const [data, setData] = useState(serverData)

    useEffect(() => {
        async function load() {
            const projects = await aboutUsAPI.getProjects()
            const employees = await aboutUsAPI.getEmployees()
            const articles = await aboutUsAPI.getArticles()
            const data = {
                projects: projects.data,
                employees: employees.data,
                articles: articles.data
            }
            setData(data)
        }

        if (!serverData) {
            load()
        }
    }, [])

    if (!data) {
        return (
            <p>Loading...</p>
        )
    }

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

export async function getStaticProps() {
    const projects = await aboutUsAPI.getProjects()
    const employees = await aboutUsAPI.getEmployees()
    const articles = await aboutUsAPI.getArticles()
    return {
        props: {
                projects: projects.data,
                employees: employees.data,
                articles: articles.data
        }
    }
}