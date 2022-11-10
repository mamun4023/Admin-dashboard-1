

import './home.scss';
import Sidebar from '../../components/sidebar/sidebar';
import Navbar from '../../components/navbar/navbar';
import Widget from '../../components/widget/widget';
import Featured from '../../components/featured/featured';
import Chart from '../../components/chart/chart';
import Table from '../../components/table/table'

const Home = ()=>{
    return(
        <div className='home'>
            <Sidebar />
            
            <div className='homeContainer'>
                <Navbar/>
                <div className='widgets'>
                    <Widget type = "user" />
                    <Widget type = "order" />
                    <Widget type = "earning" />
                    <Widget type = "balance" />
                </div>
                <div className='charts'>
                    <Featured />
                    <Chart  aspect={2/.76} />
                </div>
                <div className="listContainer">
                    <div className="listTilt">
                        <div className="latestTransaction">
                            <Table />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;