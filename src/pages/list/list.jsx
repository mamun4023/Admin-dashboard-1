

import './list.scss';
import Sidebar from '../../components/sidebar/sidebar';
import Navbar from '../../components/navbar/navbar';
import DataTable from '../../components/dataTable/datatable';

const List = ()=>{
    return(
        <div className="list">
            <Sidebar/>
            
            <div className='listContainer'>
                <Navbar/>

                <DataTable/>
            </div>            
        </div>
    )
}

export default List;