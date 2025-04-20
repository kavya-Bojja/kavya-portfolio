import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

export default function Layout(){
    return(
        <>
        <div className = 'app-wrapper'>
        <Navbar/>
        <main className = 'content'>
            <Outlet/>
        </main>
        <Footer/>
        </div>
        </>
    );
}