import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
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
            <Header state={props.state.header}/>
            <div className={'app-wrapper-content'}>
                <Route path={'/aboutUs'} render={() => <AboutUs state={props.state.mainPage}/>}/>
                <Route path={'/services'} render={() => <Services/>}/>
                <Route path={'/supportPrice'} render={() => <SupportPrice/>}/>
                <Route path={'/contacts'} render={() => <Contacts/>}/>
                <Route path={'/login'} render={() => <Login/>}/>
            </div>
            <Footer state={props.state.footer}/>
        </div>
    )
}

export default App
