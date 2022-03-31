import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import {Header} from './components/Header/Header';
import {Main} from './components/Main/Main';
import {About} from './components/About/About';

import {Contact} from './components/Contact/Contact';

export function App() {
    return (
        <div className="App">
            <Main/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/Main/*"
                           element={<Main/>}/>
                    <Route path="/news/*" element={<About/>}/>
                    <Route path="/settings/*" element={<Contact/>}/>
                </Routes>
        </div>
        </div>
    );
}