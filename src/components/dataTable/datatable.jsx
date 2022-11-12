
import React,{useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {userColumn, userRows} from './dataSource';

import "./datatable.scss";


const Datatable = ()=>{   
  
  const [data, setData] = useState(userRows)


  const HandleDelete = (id)=>{
    setData(data.filter(item => item.id !== id))
  }


  const ActionColumn = [
    {
      field : 'action', 
      headerName : "Action",
      width :  200,
      renderCell : (params)=>{
        return(
          <div className="cellAction">
            <div className="viewButton">View</div>
            <div className="deleteButton" onClick={()=>HandleDelete(params.row.id)} >Delete</div>
          </div>
        )
      }
    }
  ]

    return(
        <div className="dataTable">
            <div style={{ height: 550, width: '100%' }}>
                <DataGrid
                    className='datagrid'
                    rows={data}
                    columns={userColumn.concat(ActionColumn)}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                    checkboxSelection
                />
            </div>
        </div>
    )
}

export default Datatable;