
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {userColumn, userRows} from './dataSource';

import "./datatable.scss";


const Datatable = ()=>{    

  const ActionColumn = [
    {
      field : 'action', 
      headerName : "Action",
      width :  200,
      renderCell : ()=>{
        return(
          <div className="cellAction">
            <div className="viewButton">View</div>
            <div className="deleteButton">Delete</div>
          </div>
        )
      }
    }
  ]

    return(
        <div className="dataTable">
            <div style={{ height: 550, width: '100%' }}>
                <DataGrid
                    rows={userRows}
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