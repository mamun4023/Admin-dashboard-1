import React, {useContext} from "react";
import "./navbar.scss"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import {DarkModeContext} from '../../ContextAPI/darkModeContext';

const Navbar = ()=>{
    const {dispatch} = useContext(DarkModeContext)
    return(
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Search..."  />
                    <SearchOutlinedIcon className="search-icon"/>
                </div>

                <div className="items">
                    <div className="item">
                        <LanguageOutlinedIcon  className="icon"/>
                        English
                    </div>
                    <div className="item">
                        <DarkModeOutlinedIcon
                            className="icon"
                            onClick = {()=> dispatch({type : "TOGGLE"})}
                        />
                        
                    </div>
                    <div className="item">
                        <FullscreenExitOutlinedIcon className="icon"/>
                        
                    </div>
                    <div className="item">
                        <FullscreenExitOutlinedIcon className="icon"/>
                        
                    </div>
                    <div className="item">
                        <NotificationsNoneOutlinedIcon className="icon"/>
                        <div className="counter"> 5</div>
                    </div>
                    <div className="item">
                        <ChatBubbleOutlineOutlinedIcon className="icon"/>
                        <div className="counter">2 </div>
                        
                    </div>
                    <div className="item">
                        <img 
                            src="https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg"
                            className="avatar"
                        />
                    </div>
                </div>

            </div>
        
        </div>
    )
}

export default Navbar;