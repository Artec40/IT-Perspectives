import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Provider } from 'react-redux'
import store from '../redux/redux-store'
import '../styles.scss'
import Layout from '../components/Layout/Layout';

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
    // @ts-ignore
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

    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    )
}

export default MyApp