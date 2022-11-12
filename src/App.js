
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import "./app.scss";

import Home from './pages/home/home';
import Login from './pages/login/login';
import List from './pages/list/list';
import Single from './pages/single/single';
import New from './pages/new/new';
import { useContext, useState } from 'react';
import  {DarkModeContext} from './ContextAPI/darkModeContext';


function App(){
    // const [dark, setDark] = useState(true);
    const {darkMode}  = useContext(DarkModeContext)
    return(
        <div className={ darkMode?"app dark": "app"} >
            <BrowserRouter>
                <Routes>
                    <Route path='/'>
                        <Route index element = {<Home/>} />
                        <Route path='login' element = {<Login/>} />
                        <Route path='users'> 
                            <Route index element = {<List/>} />
                            <Route path=':userId'  element = {<Single />}/>
                            <Route path='new' element = {<New/>} />
                        </Route>
                        <Route path='products'> 
                            <Route index element = {<List/>} />
                            <Route path=':productId'  element = {<Single />}/>
                            <Route path='new' element = {<New/>} />
                        </Route>
                    </Route> 
                </Routes>
            </BrowserRouter>                       
        </div>
    )
}

export default App;