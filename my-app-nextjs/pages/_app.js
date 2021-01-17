import { Layout } from '../components/Layout/Layout'
import { Provider } from 'react-redux'
import { useStore } from '../redux/redux-store'
import '../styles.scss'

export default function MyApp({Component, pageProps}) {
    const store = useStore(pageProps.initialReduxState)

    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    )
}