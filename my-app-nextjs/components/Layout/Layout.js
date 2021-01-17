import HeaderContainer from './Header/HeaderContainer'
import FooterContainer from './Footer/FooterContainer'
import s from './Layout.module.scss'

export function Layout({children}) {
    return (
        <div className={s.wrapper}>
            <HeaderContainer/>
            {children}
            <FooterContainer/>
        </div>
    )
}
