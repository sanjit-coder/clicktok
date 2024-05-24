import {useState} from 'react';
import SideDrawer from 'components/SideDrawer';
import Table from 'components/Table';
import React from 'react';

const KPI = () => {
  const [columns, setColumns] = useState([
    {
      name: 'Name',
      selector: row => row.name,
      format: row => <b>{row.name}</b>,
    },
    {
      name: 'Total Stats',
      selector: row => row.stats,
    },
    {
      name: 'Created Time',
      selector: row => row.createdTime,
    },
  ]);
  const [data, setData] = useState([
    {
      id: 1,
      name: 'Mohit',
      stats: 3,
      createdTime: '12:00 pm',
    },
    {
      id: 2,
      name: 'Sanjit',
      stats: 7,
      createdTime: '1:00 pm',
    },
    {
      id: 3,
      name: 'Brijesh',
      stats: 10,
      createdTime: '5:00 pm',
    },
  ]);
  return (
    <>
      <SideDrawer tabSelected="kpi">
        <Table columns={columns} data={data} />
      </SideDrawer>
    </>
  );
};

export default KPI;
