import React, {useState} from 'react';
import SideDrawer from 'components/SideDrawer';
import Table from 'components/Table';
import {capitalizeFirstLetter} from 'utils/constants';
import {Button} from '@mui/material';
import {saveAs} from 'file-saver';
import DownloadIcon from '@mui/icons-material/Download';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Users = () => {
  const [columns, setColumns] = useState([
    {
      name: 'Username',
      selector: row => row.userName,
      format: row => <b>{row.userName}</b>,
    },
    {
      name: 'Status',
      selector: row => row?.status,
      cell: row => {
        return (
          <div
            style={{
              color:
                row?.status === 'active'
                  ? 'green'
                  : row?.status === 'inactive'
                  ? 'red'
                  : 'gray',
            }}>
            {capitalizeFirstLetter(row?.status)}
          </div>
        );
      },
    },
    {
      name: 'Location',
      selector: row => row.location,
    },
    {
      name: 'Phone Number',
      selector: row => row.phoneNo,
    },
    {
      name: 'Action',
      cell: () => {
        return <MoreVertIcon />;
      },
    },
  ]);
  const [data, setData] = useState([
    {
      userName: 'Sanjit',
      status: 'active',
      location: 'Delhi',
      phoneNo: '9999999999',
    },
    {
      userName: 'Mohit',
      status: 'active',
      location: 'Noida',
      phoneNo: '9999999999',
    },
    {
      userName: 'Brijesh',
      status: 'inactive',
      location: 'Ghaziabad',
      phoneNo: '9999999999',
    },
  ]);

  const handleDownload = data => {
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], {type: 'application/json'});
    saveAs(blob, 'data.json');
  };

  return (
    <SideDrawer tabSelected="users">
      <div className="notifications">
        <div className="notifications__topcontainer">
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#128C7E',
              color: 'white',
              padding: '12px',
              fontWeight: 'bold',
              textTransform: 'initial',
              '&:hover': {
                backgroundColor: '#128C7E',
              },
            }}
            endIcon={<DownloadIcon />}
            onClick={() => handleDownload(data)}>
            Download
          </Button>
        </div>
        <div>
          <Table columns={columns} data={data} />
        </div>
      </div>
    </SideDrawer>
  );
};

export default Users;
