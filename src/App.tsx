import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {Main} from './components/Main/Main';
import {About} from './components/About/About';
import {Contact} from './components/Contact/Contact';
import {Nav} from './components/Nav/Nav';
import s from './App.module.css';
import {Portfolio} from './components/Portfolio/Portfolio';


export function App() {
    const classes = s.themeDark ? s.themeDark : s.themeWhite;
    return (
        <div className={`${s.App} ${classes}`}>
            <Routes>
                <Route path="/*" element={<Main/>}/>
                <Route path="/home/*" element={<Main/>}/>
                <Route path="/about/*" element={<About/>}/>
                <Route path="/contact/*" element={<Contact/>}/>
                <Route path="/portfolio/*" element={<Portfolio/>}/>
            </Routes>
            <Nav/>
        </div>
    );
}