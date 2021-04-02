import {GetServerSideProps} from 'next'
import {aboutUsAPI, loginAPI} from './api'

export const getAboutUsServerSideProps: GetServerSideProps = async (context) => {
    return {
        props: {
            initialReduxState: {
                serverSideEmployees: await aboutUsAPI.getEmployees(),
                serverSideProjects: await aboutUsAPI.getProjects(),
                serverSideArticles: await aboutUsAPI.getArticles()
            }
        }
    }
}

export const getProjectServerSideProps: GetServerSideProps = async (context) => {
    return {
        props: {
            initialReduxState: {
                serverSideProject: await aboutUsAPI.getProject(Number(context.params.id)),
                serverSideKillerFeatures: await aboutUsAPI.getKillerFeatures(Number(context.params.id))
            }
        }
    }
}

export const getEmployeeServerSideProps: GetServerSideProps = async (context) => {
    return {
        props: {
            initialReduxState: {
                serverSideEmployee: await aboutUsAPI.getEmployee(Number(context.params.id)),
                serverSideEmployeeProjects: await aboutUsAPI.getEmployeeProjects(Number(context.params.id)),
                serverSideEmployeeArticles: await aboutUsAPI.getEmployeeArticles(Number(context.params.id))
            }
        }
    }
}

export const getLoginServerSideProps: GetServerSideProps = async (context) => {
    return {
        props: {
            initialReduxState: {
                serverSideAccounts: await loginAPI.getAccounts()
            }
        }
    }
}