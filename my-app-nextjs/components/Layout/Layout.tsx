import Header from './Header/Header'
import Footer from './Footer/Footer'
import s from './Layout.module.scss'

export function Layout({children}) {
    return (
        <div className={s.wrapper}>
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}
