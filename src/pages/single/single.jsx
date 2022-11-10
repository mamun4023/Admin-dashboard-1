

import "./single.scss";
import Sidebar from '../../components/sidebar/sidebar';
import Navbar from '../../components/navbar/navbar';
import Chart from '../../components/chart/chart';
import TransactionList from '../../components/table/table'

const Single = ()=>{
    return(
        <div className="single">
            <Sidebar/>
            <div className="singleContainer"> 
                <Navbar/>
                <div className="top">
                    <div className="left">
                        <div className="editButton">Edit</div>
                        <h1 className="title">Information</h1>
                        <div className="item">
                            <img 
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw_ic9bXiWvlcDu4s9V6y20GkMouT_ySDtFw5TS0yg&s" 
                                alt="" 
                                className="itemImg" 
                            />
                            <div className="details">
                                <h1 className="itemTitle">Jane Done</h1>
                                <div className="detailItem">
                                    <span className="itemKey">Email</span>
                                    <span className="itemValue">janedoe@gmail.com</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Phone</span>
                                    <span className="itemValue">+102565455233</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Address</span>
                                    <span className="itemValue">Elton St. 204 Gardern Yd. NewYork</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Country</span>
                                    <span className="itemValue">USA</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <Chart aspect = {3/1} />
                    </div>
                </div>

                <div className="bottom">
                    <h1 className="title"> Last Transaction</h1>

                    <TransactionList/>
                    
                </div>
                    
            </div>
            
        </div>
    )
}

export default Single;