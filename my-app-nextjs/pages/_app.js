import { Layout } from '../components/Layout/Layout'
import App from 'next/app'
import { Provider } from 'react-redux'
import { useStore } from '../redux/redux-store'
import '../styles.scss'

function MyApp({Component, pageProps}) {
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