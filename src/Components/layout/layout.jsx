import React from 'react'
import Header from '../Ui/header'
import Footer from '../Ui/footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
    < >
    <Header/>
    <Outlet/>
    <Footer/>
        </>
    )
}


