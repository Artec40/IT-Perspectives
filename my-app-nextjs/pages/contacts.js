import Head from 'next/head'

export default function Contacts() {
    return (
        <>
            <Head>
                <title>Контакты</title>
            </Head>
            <div>Contacts</div>
        </>
    )
}

export async function getStaticProps() {
    return {
        props: {
            initialReduxState: {
            }
        }
    }
}
