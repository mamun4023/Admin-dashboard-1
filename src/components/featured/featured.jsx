
import "./featured.scss";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Featured = ()=>{
    return(
        <div className="featured">
        
            <div className="top">
                <div className="title"> ToTal Revenue </div>
                <MoreVertIcon fontSize="small"/>
            </div>

            <div className="bottom"> 
                <div className="featuredChart">
                    <CircularProgressbar value={75} text = {"70%"} strokeWidth = {5}/>
                </div>
                <p className="title"> total sales made today</p>
                <p className="amount"> $420</p>
                <p className="description"> description </p>
                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">Title</div>
                        <div className="itemResult negative">
                            <KeyboardArrowDownIcon/>
                            <div className="resultAmount">$12.0k</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Title</div>
                        <div className="itemResult positive">
                            <KeyboardArrowDownIcon/>
                            <div className="resultAmount">$12.0k</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Title</div>
                        <div className="itemResult positive">
                            <KeyboardArrowDownIcon/>
                            <div className="resultAmount">$12.0k</div>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    )
}

export default Featured;