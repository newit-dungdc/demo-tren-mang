/* eslint-disable react/jsx-key */
import * as React from 'react';
import type { NextPage } from 'next'

import { useRouter } from 'next/router'

import { styled, alpha } from '@mui/material/styles';
import { DataGrid, GridActionsCellItem, GridColDef, GridRowParams } from '@mui/x-data-grid';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

import UserContext from '../contexts/UserContext';
import MainWrapper from '../components/Layout/MainWrapper';
import UserApi from '../services/User';
import Box from '@mui/material/Box';




const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  '&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus': {
    outline: 'none',
  },
  '&.MuiDataGrid-root .MuiDataGrid-cell:focus': {
    outline: 'none',
  },
}));

const Home: NextPage = () => {
  const router = useRouter();
  const userContext = React.useContext(UserContext);
  const [selectedRows, setSelectedRows] = React.useState<Array<number>>([]);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const onAdd = () => {
    router.push('/edit');
  }
  const onEdit = () => {
    if ( selectedRows.length == 0 )
    {
      setOpenSnackbar(true);
      return;
    }
    router.push({pathname: '/edit/[uid]', query: {uid: selectedRows[0]}});
  }
  const onDelete = () => {
    if ( selectedRows.length == 0 )
    {
      setOpenSnackbar(true);
      return;
    }

    UserApi.remove((res: any)=>{
      userContext.push(
        [...userContext.list.filter((user) =>selectedRows.indexOf(user.id) == -1)], true
      );
    }, selectedRows);
    
  }

  const menus = [
    {
      title: 'Create',
      clickHandle: onAdd
    },

    {
      title: 'Edit',
      clickHandle: onEdit
    },

    {
      title: 'Delete',
      clickHandle: onDelete
    }

  ];

  const users = userContext.list;
  
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'username', headerName: 'User name', width: 150 },
    { field: 'email', headerName: 'Email', width: 200, sortable: false },
    { field: 'address', headerName: 'Address', width: 200, sortable: false },
  ];
  return (
    <MainWrapper menus={menus}>


      <div style={{ height: 400, width: '100%' }}>
      <Box mb={2}>
        <Button variant="contained" startIcon={<AddIcon />} onClick={onAdd}>
          Add new
        </Button>
      </Box>

        <StyledDataGrid
          rows={users}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          onSelectionModelChange={(newSelection: any) => setSelectedRows(newSelection)}
        />
      </div>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={()=>setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        data-testid="warning-alert"
        sx={{
          mt: 10,
        }}
      >
        <Alert severity="warning" sx={{ width: '100%' }}>
          Please select the user.
        </Alert>
      </Snackbar>
    </MainWrapper>
  )
}

export default Home
