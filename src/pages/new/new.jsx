

import './new.scss';
import Sidebar from '../../components/sidebar/sidebar';
import Navbar from '../../components/navbar/navbar';
import FileUploadIcon from '@mui/icons-material/FileUpload';


const Single = ()=>{
    return(
        <div className="new">
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1 >Title</h1> 
                </div>
                <div className="bottom">
                    <div className="left">
                        <img 
                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT91LWfB_s6ULS5r0OS4gFKFd0xGZ9mleOUzA&usqp=CAU'
                        />
                    </div>
                    <div className="right">
                        <form>                            
                            <div className="formInput">
                                <label htmlFor='file'> 
                                    Image : <FileUploadIcon className='icon'/>
                                </label>
                                <input type="file"  id='file' style={{display: "none"}}/>
                            </div>

                            <div className="formInput">
                                <label> Username</label>
                                <input type="text"  placeholder='enter username'/>
                            </div>
                            
                            <div className="formInput">
                                <label> Name and surname</label>
                                <input type="text"  placeholder='enter fullname'/>
                            </div>
                            
                            <div className="formInput">
                                <label> Email</label>
                                <input type="email"  placeholder='enter email'/>
                            </div>
                            
                            <div className="formInput">
                                <label> Phone </label>
                                <input type="text"  placeholder='enter phone'/>
                            </div>
                            <div className="formInput">
                                <label> Password </label>
                                <input type="text"  placeholder='enter phone'/>
                            </div>
                            <div className="formInput">
                                <label> Adress </label>
                                <input type="text"  placeholder='enter phone'/>
                            </div>
                            <div className="formInput">
                                <label> Country </label>
                                <input type="text"  placeholder='enter phone'/>
                            </div>
                            <button> Send</button>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Single;