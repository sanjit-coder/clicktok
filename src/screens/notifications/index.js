import React, {useState} from 'react';
import SideDrawer from 'components/SideDrawer';
import Table from 'components/Table';
import {useNavigate} from 'react-router-dom';
import {Button} from '@mui/material';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';

const Notifications = () => {
  const navigate = useNavigate();
  const handleCreatePushNotifications = () => {
    navigate('/notifications/create');
  };

  const [columns, setColumns] = useState([
    {
      name: 'Title',
      selector: row => row.title,
      format: row => <b>{row.title}</b>,
    },
    {
      name: 'Description',
      selector: row => row.description,
    },
    {
      name: 'Created By',
      selector: row => row.createdBy,
    },
  ]);
  const [data, setData] = useState([
    {
      id: 1,
      title: 'Push notification 1',
      description: 'This is a sample notification text',
      createdBy: 'Mohit',
    },
    {
      id: 2,
      title: 'Push notification 2',
      description: 'This is a sample notification text',
      createdBy: 'Sanjit',
    },
    {
      id: 3,
      title: 'Push notification 3',
      description: 'This is a sample notification text',
      createdBy: 'Brijesh',
    },
  ]);

  return (
    <>
      <SideDrawer tabSelected="notifications">
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
              startIcon={<NotificationAddIcon />}
              onClick={() => handleCreatePushNotifications()}>
              Create Push Notification
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

export default Notifications;
