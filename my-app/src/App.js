import React from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Index from './Components/Index/Index'

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Index/>
            <Footer/>
        </div>
    )
}

export default App
