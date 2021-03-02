import {GetServerSideProps} from 'next'
import {aboutUsAPI} from './api'

export const getAboutUsServerSideProps: GetServerSideProps = async (context) => {
    return {
        props: {
            initialReduxState: {
                serverSideProjects: await aboutUsAPI.getProjects(),
                serverSideEmployees: await aboutUsAPI.getEmployees(),
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