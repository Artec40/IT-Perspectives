import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Layout } from '../components/Layout/Layout'
import { Provider } from 'react-redux'
import { useStore } from '../redux/redux-store.ts'
import '../styles.scss'

// Код с 9 по 25 && 30 по 39 строку нужен для корректной работы module.css при переходе через Link.
const cacheURL = [];

const handleLoadStyle = url => {
    if (cacheURL.includes(url)) {
        return;
    }
    const styleLinks = document.querySelectorAll(
        'link[href*="/_next/static/css/styles.chunk.css"]'
    );
    const timestamp = new Date().valueOf();
    [...styleLinks].map(link => {
        if (link.rel === 'stylesheet') {
            link.href = `/_next/static/css/styles.chunk.css?v=${timestamp}`;
            cacheURL.push(url);
        }
    });
};


function MyApp({Component, pageProps}) {

    const { asPath, events } = useRouter();
    useEffect(() => {
        if (process.env.NODE_ENV === 'production') {
            return ;
        }
        events.on('routeChangeComplete', handleLoadStyle);
        return () => {
            events.off('routeChangeComplete', handleLoadStyle);
        };
    }, [asPath]);

    const store = useStore(pageProps.initialReduxState)

    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    )
}

MyApp.getInitialProps = async ({Component, ctx}) => {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    if (Object.keys(pageProps).length > 0) {
        return {pageProps};
    } else {
        return {};
    }
};


export default MyApp