import React from 'react'
import './App.css'
import HeaderContainer from './components/Header/HeaderContainer'
import FooterContainer from './components/Footer/FooterContainer'
import AboutUsContainer from './components/AboutUs/AboutUsContainer'
import Services from './components/Services/Services'
import { BrowserRouter, Route } from 'react-router-dom'
import SupportPrice from './components/SupportPrice/SupportPrice'
import Contacts from './components/Contacts/Contacts'
import Login from './components/Login/Login'
import { Provider } from 'react-redux'
import store from './redux/redux-store'
import ProjectContainer from './components/Project/ProjectContainer'
//todo Нужно обновить верстку, DRY!!!111 И хэдер съезжает в зависимости от колёсика прокрутки.
function App(props) {
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <div className={'app-wrapper-content'}>
                <Route path={'/aboutUs'} render={() => <AboutUsContainer/>}/>
                <Route path={'/services'} render={() => <Services/>}/>
                <Route path={'/supportPrice'} render={() => <SupportPrice/>}/>
                <Route path={'/contacts'} render={() => <Contacts/>}/>
                <Route path={'/login'} render={() => <Login/>}/>
                <Route path={'/project/:projectId?'} render={()=><ProjectContainer/>}/>
            </div>
            <FooterContainer/>
        </div>
    )
}

const MyApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
}

export default MyApp
