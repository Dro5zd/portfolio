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
    return (
        <div>
            {mode
                ? <div className={`${s.App} ${s.themeDark}`}>
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
                             src="https://img.icons8.com/ios/50/000000/sun--v1.png"
                             alt={'Dark'}/>
                    </div>
                    <Nav/>
                </div>
                : <div className={`${s.App} ${s.themeWhite}`}>

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
                             src="https://img.icons8.com/small/100/000000/moon-symbol.png"
                             alt={'White'}/>
                    </div>
                    <Nav/>
                </div>
            }


        </div>

    );
}