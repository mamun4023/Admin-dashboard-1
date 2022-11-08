import React from "react";

import "./widget.scss"

import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';


const Widget = ({type})=>{

    let data;
    const amount = 100;
    const diff = 20;

    switch(type){
        case "user":
            data ={
                title : "USERS",
                isMoney : false,
                link : "See all users",
                icon : (
                        <PersonOutlineOutlinedIcon  
                            className="icon" 
                            style={{
                                color: "crimson",
                                backgroundColor : "rgba(255,0,0,0.2)"
                            }}
                        />
                    )
            };
            break;
        case "order":
            data = {
                title : "ORDERS",
                isMoney : false,
                link : "View all orders",
                icon : (
                        <ShoppingCartOutlinedIcon 
                            className="icon" 
                            style={{
                                color: "green",
                                backgroundColor : "rgba(0,128,0,0.2)"
                            }}
                        />
                    )
            }
            break;
        case "earning":
            data = {
                title : "EARNING",
                isMoney : true,
                link : "View net earnings",
                icon : (
                        <AttachMoneyOutlinedIcon 
                            className="icon" 
                            style={{
                                color: "green",
                                backgroundColor : "rgba(0,0,125,0.2)"
                            }}
                        />
                )
            }
            break;
        case "balance":
            data = {
                title : "BALANCE",
                isMoney : true,
                link : "See Balance",
                icon : (
                        <AttachMoneyOutlinedIcon 
                            className="icon" 
                            style={{
                                color: "purple",
                                backgroundColor : "rgba(120,0,0,0.2)"
                            }}
                        />
                )
            }
    }

    return(
        <div className="widget">
            <div className="left">
                <span className="title"> {data.title}</span>
                <span className="counter">{data.isMoney && "$"} {amount}</span>
                <span className="link"> {data.link} </span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpOutlinedIcon className="icon"/>
                    {diff}%
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget;