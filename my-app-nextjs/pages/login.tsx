import React from 'react'
import Head from 'next/head'
import LoginPage from '../components/Login/LoginPage'

export const Login = () => {
    return (
        <div>
            <Head>
                <title>ИТ Перспективы</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <LoginPage/>
        </div>
    )
}

export default Login