import React from 'react'
import './App.css'
import HeaderContainer from './components/Header/HeaderContainer'
import FooterContainer from './components/Footer/FooterContainer'
import AboutUs from './components/AboutUs/AboutUs'
import Services from './components/Services/Services'
import { Route } from 'react-router-dom'
import SupportPrice from './components/SupportPrice/SupportPrice'
import Contacts from './components/Contacts/Contacts'
import Login from './components/Login/Login'

//todo Нужно обновить верстку, DRY!!!111 И хэдер съезжает в зависимости от колёсика прокрутки.
function App(props) {
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <div className={'app-wrapper-content'}>
                <Route path={'/aboutUs'} render={() => <AboutUs/>}/>
                <Route path={'/services'} render={() => <Services/>}/>
                <Route path={'/supportPrice'} render={() => <SupportPrice/>}/>
                <Route path={'/contacts'} render={() => <Contacts/>}/>
                <Route path={'/login'} render={() => <Login/>}/>
            </div>
            <FooterContainer/>
        </div>
    )
}

export default App
