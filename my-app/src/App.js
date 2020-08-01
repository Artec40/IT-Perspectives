import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import AboutUs from './components/AboutUs/Index'
import Services from './components/Services/Services'
import { BrowserRouter, Route } from 'react-router-dom'
import SupportPrice from './components/SupportPrice/SupportPrice'
import Contacts from './components/Contacts/Contacts'

//todo Картинки нужно перенести в public, но мешает ошибка - выход за пределы  src.
//todo Нужно обновить верстку, DRY!!!111 И хэдер съезжает в зависимости от колёсика прокрутки.
function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/aboutUs'} component={AboutUs}/>
                    <Route path={'/services'} component={Services}/>
                    <Route path={'/supportPrice'} component={SupportPrice}/>
                    <Route path={'/contacts'} component={Contacts}/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default App
