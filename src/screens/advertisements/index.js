import React, {useState} from 'react';
import SideDrawer from 'components/SideDrawer';
import Table from 'components/Table';
import {useNavigate} from 'react-router-dom';
import {Button} from '@mui/material';
import FeaturedVideoIcon from '@mui/icons-material/FeaturedVideo';

const AdvertisementsList = () => {
  const navigate = useNavigate();

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
      name: 'Image/Video',
    },
    {
      name: 'Duration',
      selector: row => row.duration,
    },
  ]);

  const [data, setData] = useState([
    {
      id: 1,
      title: 'Ad 1',
      description: 'This is a sample advertisement text',
      duration: '5 mins',
    },
    {
      id: 2,
      title: 'Ad 2',
      description: 'This is a sample advertisement text',
      duration: '10 mins',
    },
    {
      id: 3,
      title: 'Ad 3',
      description: 'This is a sample advertisement text',
      duration: '15 mins',
    },
  ]);

  const handleCreateAdvertisement = () => {
    navigate('/advertisements/create');
  };

  return (
    <>
      <SideDrawer tabSelected="advertisements">
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
              startIcon={<FeaturedVideoIcon />}
              onClick={() => handleCreateAdvertisement()}>
              Create Advertisement
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

export default AdvertisementsList;
