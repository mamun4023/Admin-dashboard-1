import  ReactDOM  from "react-dom";
import App from './App';
import {DarkModeContextProvider} from './ContextAPI/darkModeContext';

ReactDOM.render(

    <DarkModeContextProvider>   
        <App/>
    </DarkModeContextProvider>
    , 
document.getElementById('root'))