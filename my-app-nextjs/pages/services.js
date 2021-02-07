import Head from 'next/head'

export default function Services() {
    return (
        <>
            <Head>
                <title>Услуги и цены</title>
            </Head>
            <div>Services</div>
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
