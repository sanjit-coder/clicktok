import {useState} from 'react';
import SideDrawer from 'components/SideDrawer';
import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Button} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Table from 'components/Table';
import {tableColumns} from 'utils/constants';
const Dashboard = () => {
  const navigate = useNavigate();
  const handleCreateAdmin = () => {
    navigate('/admin/add');
  };

  const [columns, setColumns] = useState(tableColumns);
  const [data, setData] = useState([
    {
      id: 1,
      name: 'Mohit',
      role: 'Admin',
      createdBy: 'Ashish Aggarwal',
      read: true,
      write: true,
      delete: false,
    },
    {
      id: 2,
      name: 'Sanjit',
      role: 'SuperAdmin',
      createdBy: 'Abhishek Gupta',
      read: true,
      write: true,
      delete: true,
    },
    {
      id: 3,
      name: 'Brijesh',
      role: 'Manager',
      createdBy: 'Abhinay Kansal',
      read: true,
      write: false,
      delete: false,
    },
    {
      id: 4,
      name: 'Virat',
      role: 'SuperAdmin',
      createdBy: 'Abhishek Gupta',
      read: true,
      write: true,
      delete: true,
    },
    {
      id: 5,
      name: 'Sachin',
      role: 'Admin',
      createdBy: 'Ashish Aggarwal',
      read: true,
      write: true,
      delete: false,
    },
    {
      id: 6,
      name: 'Yuvraj',
      role: 'Manager',
      createdBy: 'Abhinay Kansal',
      read: true,
      write: false,
      delete: false,
    },
  ]);

  return (
    <>
      <SideDrawer tabSelected="dashboard">
        <div className="dashboard">
          <div className="dashboard__topcontainer">
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#128C7E',
                color: 'white',
                padding: '12px',
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: '#128C7E',
                },
              }}
              startIcon={<AddIcon />}
              onClick={() => handleCreateAdmin()}>
              CREATE ADMIN
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

export default Dashboard;
