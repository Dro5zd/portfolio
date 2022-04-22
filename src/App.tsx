import React, {useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import {Main} from './components/Main/Main';
import {About} from './components/About/About';
import {Contact} from './components/Contact/Contact';
import {Nav} from './components/Nav/Nav';
import s from './App.module.css';
import {Portfolio} from './components/Portfolio/Portfolio';
import img from './components/Main/myPortrait.jpg';


export function App() {
    const [mode, setMode] = useState<boolean>(true)
    const onChangeThemeHandler = () => {
        return setMode(!mode)
    }

    let mainTheme = `${s.App} ${s.themeWhite}`;
    let imgLogo = 'https://img.icons8.com/small/100/000000/moon-symbol.png'

    if (mode) {
        mainTheme = `${s.App} ${s.themeDark}`
        imgLogo = 'https://img.icons8.com/ios/50/000000/sun--v1.png'
    }
    return (
        <div className={mainTheme}>
            <Routes>
                <Route path="/*" element={<Main/>}/>
                <Route path="/home/*" element={<Main/>}/>
                <Route path="/about/*" element={<About/>}/>
                <Route path="/contact/*" element={<Contact/>}/>
                <Route path="/portfolio/*" element={<Portfolio/>}/>
            </Routes>
            <div className={s.switcherBtn}>
                <img className={s.mainBtnIcon}
                     onClick={onChangeThemeHandler}
                     src={imgLogo}
                     alt={'logo'}/>
            </div>
            <Nav/>
        </div>

    );
}