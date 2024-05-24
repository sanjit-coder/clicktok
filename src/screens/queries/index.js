import React, {useState} from 'react';
import SideDrawer from 'components/SideDrawer';
import Table from 'components/Table';
import {capitalizeFirstLetter} from 'utils/constants';
import {saveAs} from 'file-saver';
import {Button} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

const QueriesManagement = () => {
  const [columns, setColumns] = useState([
    {
      name: 'User',
      selector: row => row.user,
      format: row => <b>{row.user}</b>,
    },
    {
      name: 'Creation Date',
      selector: row => row.creationDate,
    },
    {
      name: 'Query Reason',
      selector: row => row.reason,
    },
    {
      name: 'Status',
      selector: row => row.status,
      cell: row => {
        return (
          <div
            style={{
              color:
                row?.status === 'accepted'
                  ? 'green'
                  : row?.status === 'rejected'
                  ? 'red'
                  : 'gray',
            }}>
            {capitalizeFirstLetter(row?.status)}
          </div>
        );
      },
    },
  ]);
  const [data, setData] = useState([
    {
      id: 1,
      user: 'Mohit',
      creationDate: '22 June,2023',
      reason: 'Query Reason 1',
      status: 'accepted',
    },
    {
      id: 2,
      user: 'Sanjit',
      creationDate: '23 June,2023',
      reason: 'Query Reason 2',
      status: 'rejected',
    },
    {
      id: 3,
      user: 'Brijesh',
      creationDate: '24 June,2023',
      reason: 'Query Reason 3',
      status: 'pending',
    },
    {
      id: 4,
      user: 'Virat',
      creationDate: '25 June,2023',
      reason: 'Query Reason 4',
      status: 'accepted',
    },
    {
      id: 5,
      user: 'Rohit',
      creationDate: '26 June,2023',
      reason: 'Query Reason 5',
      status: 'rejected',
    },
  ]);

  const handleDownload = data => {
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], {type: 'application/json'});
    saveAs(blob, 'data.json');
  };
  return (
    <>
      <SideDrawer tabSelected="queries">
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
    </>
  );
};

export default QueriesManagement;
